import {Component, Input} from '@angular/core';
import {FixtureTableElement} from "../../../model/fixtures.model";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatRow,
  MatTable
} from "@angular/material/table";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'foot-team-details-table',
  templateUrl: './team-details-table.component.html',
  styleUrls: ['./team-details-table.component.sass'],
  imports: [
    MatColumnDef,
    MatTable,
    MatHeaderCell,
    MatCell,
    NgForOf,
    MatCellDef,
    MatHeaderCellDef,
    NgClass,
    MatRow
  ],
  standalone: true
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



