import {Injectable} from '@angular/core';
import {FootballCountry} from "./model/football-country.model";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  getCountries(): FootballCountry[] {
    return [
      {
        name: 'england',
        league: 'Premier League'
      }, {
        name: 'spain',
        league: 'La Liga'
      }, {
        name: 'france',
        league: 'Ligue 1'
      }, {
        name: 'germany',
        league: 'Bundesliga'
      }, {
        name: 'italy',
        league: 'Serie A'
      }
    ];
  }
}
