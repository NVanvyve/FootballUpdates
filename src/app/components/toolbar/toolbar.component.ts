import {Component} from '@angular/core';
import {FootballCountry} from "../../model/football-country.model";
import {CountryService} from "../../services/country.service";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {LowerCasePipe, NgForOf, NgOptimizedImage, TitleCasePipe} from "@angular/common";
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'foot-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass'],
  imports: [
    RouterLink,
    NgForOf,
    MatToolbar,
    LowerCasePipe,
    TitleCasePipe,
    MatAnchor,
    RouterLinkActive
  ],
  standalone: true
})
export class ToolbarComponent {
  footballCountries: FootballCountry[] = this.countryService.footballCountries;

  constructor(private countryService: CountryService) {
  }

  // TODO Put in variable
  getUrl(leagueId: number): string {
    return `https://media-4.api-sports.io/football/leagues/${leagueId}.png`;
  }
}
