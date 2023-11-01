import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {map, Observable} from "rxjs";
import {FootballCountry} from "../../model/football-country.model";
import {CountryService} from "../../services/country.service";
import {StandingsTableElement} from "../../model/standings.model";
import {fakeTableData} from "./league-table/fakedata";

@Component({
  selector: 'foot-league-details',
  templateUrl: './league-details.component.html',
  styleUrls: ['./league-details.component.sass']
})
export class LeagueDetailsComponent implements OnInit {

  footballCountry?: FootballCountry;
  isReady: boolean = false;
  tableData: StandingsTableElement[] = fakeTableData; // TODO Change with real data

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {
  }

  ngOnInit(): void {
    this.getCountryFromRoute().subscribe({
      next: (country: string) => {
        this.footballCountry = this.countryService.getCountry(country);
        if (this.footballCountry) {
          this.isReady = true;
        }
      },
      error: (error: Error) => {
        console.error(error);
      }
    })
  }

  private getCountryFromRoute(): Observable<string> {
    return this.route.paramMap.pipe(
      map((paramMap: ParamMap) => {
          const country: string | null = paramMap.get('country');
          if (!country) {
            throw new Error('Country not found in route');
          }
          return country;
        }
      ));
  }
}
