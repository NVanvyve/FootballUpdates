import {Component} from '@angular/core';
import {FootballCountry} from "../model/football-country.model";
import {FixedDataService} from "../services/fixed-data.service";

@Component({
  selector: 'foot-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent {
  footballCountries: FootballCountry[] = this.fixedDataService.getCountries();

  constructor(private fixedDataService: FixedDataService) {
  }
}
