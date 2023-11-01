import {Component} from '@angular/core';

@Component({
  selector: 'foot-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.sass']
})
export class LeagueTableComponent {
  dataSource: any[] = [];
  displayedColumns: string[] = ['position', 'image', 'name', 'game', 'win', 'lose', 'draw', 'goal-difference', 'points'];

}
