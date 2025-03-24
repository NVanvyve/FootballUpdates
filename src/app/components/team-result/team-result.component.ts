import {Component, DestroyRef, inject} from '@angular/core';
import {ActivatedRoute, ParamMap, RouterLink} from "@angular/router";
import {ErrorService} from "../../services/error.service";
import {FixtureTableElement, TeamDetails} from "../../model/fixtures.model";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {TeamDetailsTableComponent} from "./team-details-table/team-details-table.component";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'foot-team-result',
  templateUrl: './team-result.component.html',
  styleUrls: ['./team-result.component.sass'],
  imports: [
    TeamDetailsTableComponent,
    RouterLink,
    MatAnchor
  ],
  standalone: true
})
export class TeamResultComponent {
  tableData?: FixtureTableElement[];
  teamName?: string;
  teamLogo?: string;

  private destroyRef: DestroyRef = inject(DestroyRef);

  constructor(
    route: ActivatedRoute,
    errorService: ErrorService,
  ) {
    route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (_: ParamMap) => {
        const details: TeamDetails = route.snapshot.data['teamDetails'] as TeamDetails;
        this.tableData = details.table;
        this.teamName = details.team.name;
        this.teamLogo = details.team.image;
      },
      error: (error: Error) => {
        errorService.handleError(error)
      }
    });
  }
}

