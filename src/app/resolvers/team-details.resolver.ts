import {ResolveFn} from '@angular/router';
import {TeamDetails} from "../model/fixtures.model";
import {inject} from "@angular/core";
import {CountryService} from "../services/country.service";
import {FootballCountry} from "../model/football-country.model";
import {FixturesApiService} from "../services/fixtures-api.service";

export const teamDetailsResolver: ResolveFn<TeamDetails> = (route, _state) => {
  const country: string = route.paramMap.get('country')!
  const leagueId: number = inject(CountryService).getCountry(country).leagueId;
  const teamId: string = route.paramMap.get('teamId')!;
  const params: RouteParams = {
    leagueId,
    teamId: Number.parseInt(teamId)
  }
  return inject(FixturesApiService).getFixturesTeamId(params.teamId, params.leagueId)
};

interface RouteParams {
  leagueId: FootballCountry['leagueId'];
  teamId: number;
}
