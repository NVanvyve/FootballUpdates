import {ResolveFn} from '@angular/router';
import {StandingsTableElement} from "../model/standings.model";
import {inject} from "@angular/core";
import {CountryService} from "../services/country.service";
import {FootballCountry} from "../model/football-country.model";
import {StandingsApiService} from "../services/standings-api.service";

export const standingResolver: ResolveFn<StandingsTableElement[]> = (route, _state) => {
  const country: string = route.paramMap.get('country')! // Present and valid => Guaranteed by the guard
  const footballCountry: FootballCountry = inject(CountryService).getCountry(country);
  return inject(StandingsApiService).getStandingsByCountry(footballCountry.name)
}

