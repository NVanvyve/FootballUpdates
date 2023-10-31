import {Injectable} from '@angular/core';
import {FootballCountry} from "../model/football-country.model";

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _footballCountries: FootballCountry[] = [
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

  isAValidCountry(country: string): boolean {
    return this._footballCountries.some((c) => c.name === country);
  }

  get footballCountries(): FootballCountry[] {
    return this._footballCountries;
  }

  get defaultCountryName(): string {
    return this._footballCountries[0].name;
  }
}
