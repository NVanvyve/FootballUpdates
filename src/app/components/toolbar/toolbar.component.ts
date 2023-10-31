import {Component} from '@angular/core';
import {FootballCountry} from "../../model/football-country.model";
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'foot-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent {
  footballCountries: FootballCountry[] = this.countryService.footballCountries;

  constructor(private countryService: CountryService) {
  }
}
