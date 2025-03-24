import {Component, inject, OnInit} from '@angular/core';
import {FootballCountry} from "../../model/football-country.model";
import {CountryService} from "../../services/country.service";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {LowerCasePipe, NgForOf, TitleCasePipe} from "@angular/common";
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
export class ToolbarComponent implements OnInit {
  private countryService: CountryService = inject(CountryService)
  footballCountries: FootballCountry[] = this.countryService.footballCountries;
  public urlMap: { [key: number]: string } = {};

  ngOnInit(): void {
    for (const id of this.footballCountries.map(v => v.leagueId)) {
        this.urlMap[id] = this.getUrl(id)
    }
  }

  private getUrl(leagueId: number): string {
    return `https://media-4.api-sports.io/football/leagues/${leagueId}.png`;
  }
}
