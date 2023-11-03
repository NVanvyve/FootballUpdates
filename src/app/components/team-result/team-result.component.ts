import {Component} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ErrorService} from "../../services/error.service";
import {FixtureTableElement, TeamDetails} from "../../model/fixtures.model";

@Component({
  selector: 'foot-team-result',
  templateUrl: './team-result.component.html',
  styleUrls: ['./team-result.component.sass']
})
export class TeamResultComponent {
  tableData?: FixtureTableElement[];
  teamName?: string;
  teamLogo?: string;

  constructor(
    private route: ActivatedRoute,
    private errorService: ErrorService,
  ) {
    this.route.paramMap.subscribe({
      next: (_: ParamMap) => {
        const details: TeamDetails = this.route.snapshot.data['teamDetails'] as TeamDetails;
        this.tableData = details.table;
        this.teamName = details.team.name;
        this.teamLogo = details.team.image;
      },
      error: (error: Error) => {
        this.errorService.handleError(error)
      }
    });
  }
}

