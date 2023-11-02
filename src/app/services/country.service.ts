import {Injectable} from '@angular/core';
import {FootballCountry} from "../model/football-country.model";

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _footballCountries: FootballCountry[] = [
    {
      name: 'england',
      league: 'Premier League',
      leagueId: 39
    }, {
      name: 'spain',
      league: 'La Liga',
      leagueId: 140
    }, {
      name: 'france',
      league: 'Ligue 1',
      leagueId: 61
    }, {
      name: 'germany',
      league: 'Bundesliga',
      leagueId: 78
    }, {
      name: 'italy',
      league: 'Serie A',
      leagueId: 135
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

  getCountry(country: string): FootballCountry {
    const find = this._footballCountries.find((c) => c.name === country);
    if (!find) {
      throw new Error(`Country ${country} not found`);
    }
    return find;
  }
}
