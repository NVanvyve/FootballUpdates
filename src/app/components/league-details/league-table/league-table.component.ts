import {Component, Input} from '@angular/core';
import {StandingsTableElement} from "../../../model/standings.model";

interface ColumnDefinition {
  name: string
  displayName: string
}

@Component({
    selector: 'foot-league-table',
    templateUrl: './league-table.component.html',
    styleUrls: ['./league-table.component.sass'],
    standalone: false
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
