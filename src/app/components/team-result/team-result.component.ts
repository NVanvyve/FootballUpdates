import {Component, OnInit} from '@angular/core';
import {map, Observable, tap} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FixturesApiService} from "../../services/fixtures-api.service";
import {ErrorService} from "../../services/error.service";
import {CountryService} from "../../services/country.service";
import {FootballCountry} from "../../model/football-country.model";
import {FixtureTableElement, TeamDetails} from "../../model/fixtures.model";

@Component({
  selector: 'foot-team-result',
  templateUrl: './team-result.component.html',
  styleUrls: ['./team-result.component.sass']
})
export class TeamResultComponent implements OnInit {
  isReady: boolean = false;
  tableData?: FixtureTableElement[];
  teamName?: string;
  teamLogo?: string;

  constructor(
    private route: ActivatedRoute,
    private fixturesApiService: FixturesApiService,
    private errorService: ErrorService,
    private countryService: CountryService,
  ) {

  }

  ngOnInit(): void {
    this.getParamFromRoute().subscribe({
      next: (params: RouteParams) => {
        this.fixturesApiService.getFixturesTeamId(params.teamId, params.leagueId).subscribe(
          {
            next: (details: TeamDetails) => {
              this.tableData = details.table;
              this.teamName = details.team.name;
              this.teamLogo = details.team.image;
              this.isReady = true;
            },
            error: (error: Error) => {
              this.errorService.handleError(error)
            }
          }
        )
      },
      error: (error: Error) => {
        this.errorService.handleError(error)
      }
    })
  }

  private getParamFromRoute(): Observable<RouteParams> {
    return this.route.paramMap.pipe(
      tap(() => {
        this.isReady = false;
      }),
      map((paramMap: ParamMap) => {
        const country: string | null = paramMap.get('country');
        if (!country) {
          throw new Error('Country not found in route');
        }
        const leagueId: number = this.countryService.getCountry(country).leagueId;

        const teamId: string | null = paramMap.get('teamId');
        if (!teamId) {
          throw new Error('Team ID not found in route');
        }
        return {
          leagueId,
          teamId: Number.parseInt(teamId)
        }
      })
    );
  }
}

interface RouteParams {
  leagueId: FootballCountry['leagueId'];
  teamId: number;
}
