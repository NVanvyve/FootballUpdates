import {ResolveFn, Router} from '@angular/router';
import {StandingsTableElement} from "../model/standings.model";
import {inject} from "@angular/core";
import {CountryService} from "../services/country.service";
import {FootballCountry} from "../model/football-country.model";
import {StandingsApiService} from "../services/standings-api.service";
import {catchError, of} from "rxjs";

export const standingResolver: ResolveFn<StandingsTableElement[]> = (route, _state) => {
  const router = inject(Router);

  const country: string = route.paramMap.get('country')! // Present and valid => Guaranteed by the guard
  const footballCountry: FootballCountry = inject(CountryService).getCountry(country);
  let standingsApiService = inject(StandingsApiService);
  return standingsApiService.getStandingsByCountry(footballCountry.name).pipe(
    catchError(_ => {
      router.navigate(['/error']);
      return of([]);
    })
  )
}

