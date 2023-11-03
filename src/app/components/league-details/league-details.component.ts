import {Component} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {StandingsTableElement} from "../../model/standings.model";
import {ErrorService} from "../../services/error.service";

@Component({
  selector: 'foot-league-details',
  templateUrl: './league-details.component.html',
  styleUrls: ['./league-details.component.sass']
})
export class LeagueDetailsComponent {

  tableData?: StandingsTableElement[];

  constructor(
    private route: ActivatedRoute,
    private errorService: ErrorService
  ) {
    this.route.paramMap.subscribe({
      next: (_: ParamMap) => {
        this.tableData = this.route.snapshot.data['tableData'] as StandingsTableElement[];
      },
      error: (error: Error) => {
        this.errorService.handleError(error)
      }
    });
  }
}
