import {Component} from '@angular/core';
import {AppService} from "./app.service";
import {FootballCountry} from "./model/football-country.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Football Updates';
  footballCountries: FootballCountry[] = this.appService.getCountries();

  constructor(private appService: AppService) {
  }


}
