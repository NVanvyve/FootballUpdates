import {Component, Input} from '@angular/core';
import {StandingsTableElement} from "../../../model/standings.model";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

interface ColumnDefinition {
  name: string
  displayName: string
}

@Component({
  selector: 'foot-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.sass'],
  imports: [
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    RouterLink,
    MatHeaderCellDef,
    MatCellDef,
    NgForOf,
    MatHeaderRow,
    MatRowDef,
    MatRow,
    MatHeaderRowDef
  ],
  standalone: true
})
export class LeagueTableComponent {
  @Input({required: true}) data!: StandingsTableElement[];

  displayedColumns: string[] = [
    'position',
    'image',
    'name',
    'games',
    'win',
    'lose',
    'draw',
    'goalDifference',
    'points'
  ];
  simpleTableColumns: ColumnDefinition[] = [{
    name: 'position',
    displayName: ''
  }, {
    name: 'games',
    displayName: 'Games'
  }, {
    name: 'win',
    displayName: 'W'
  }, {
    name: 'lose',
    displayName: 'L'
  }, {
    name: 'draw',
    displayName: 'D'
  }, {
    name: 'goalDifference',
    displayName: 'Goal Difference'
  }, {
    name: 'points',
    displayName: 'Points'
  }]

}
