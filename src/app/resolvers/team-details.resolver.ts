import {ResolveFn, Router} from '@angular/router';
import {TeamDetails} from "../model/fixtures.model";
import {inject} from "@angular/core";
import {CountryService} from "../services/country.service";
import {FootballCountry} from "../model/football-country.model";
import {FixturesApiService} from "../services/fixtures-api.service";
import {catchError, of} from "rxjs";

export const teamDetailsResolver: ResolveFn<TeamDetails> = (route, _state) => {
  const router = inject(Router);

  const country: string = route.paramMap.get('country')! // Present and valid => Guaranteed by the guard
  const leagueId: number = inject(CountryService).getCountry(country).leagueId;
  const teamId: string = route.paramMap.get('teamId')!; // Present and valid => Guaranteed by the guard
  const params: RouteParams = {
    leagueId,
    teamId: Number.parseInt(teamId)
  }
  return inject(FixturesApiService).getFixturesTeamId(params.teamId, params.leagueId).pipe(
    catchError(_ => {
      router.navigate(['/error'])
      return of();
    }))
};

interface RouteParams {
  leagueId: FootballCountry['leagueId'];
  teamId: number;
}
