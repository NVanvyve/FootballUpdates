import {Component, Input} from '@angular/core';
import {FixtureTableElement} from "../../../model/fixtures.model";

@Component({
    selector: 'foot-team-details-table',
    templateUrl: './team-details-table.component.html',
    styleUrls: ['./team-details-table.component.sass'],
    standalone: false
})
export class TeamDetailsTableComponent {
  @Input({required: true}) data!: FixtureTableElement[];
  @Input({required: true}) teamName!: string;

  displayedColumns: string[] = [
    'image-home',
    'name-home',
    'score',
    'name-away',
    'image-away',
  ];


  toCamelCase(text: string): string {
    return text.replaceAll(/[_-](.)/g, (_: string, char: string) => char.toUpperCase());
  }
}



