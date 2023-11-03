import {CanActivateFn} from '@angular/router';
import {inject} from "@angular/core";
import {StandingsApiService} from "../services/standings-api.service";

export const teamGuard: CanActivateFn = (route, _state) => {
  const country: string = String(route.params['country']);
  const teamId: number = Number(route.params['teamId']);
  return inject(StandingsApiService).isTeamInLeague(country, teamId);
};
