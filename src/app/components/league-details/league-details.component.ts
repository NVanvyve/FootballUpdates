import {Component, DestroyRef, inject} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {StandingsTableElement} from "../../model/standings.model";
import {ErrorService} from "../../services/error.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'foot-league-details',
  templateUrl: './league-details.component.html',
  styleUrls: ['./league-details.component.sass']
})
export class LeagueDetailsComponent {

  tableData?: StandingsTableElement[];

  private destroyRef : DestroyRef = inject(DestroyRef);
  constructor(
    route: ActivatedRoute,
    errorService: ErrorService
  ) {
    route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (_: ParamMap) => {
        this.tableData = route.snapshot.data['tableData'] as StandingsTableElement[];
      },
      error: (error: Error) => {
        errorService.handleError(error)
      }
    });
  }
}
