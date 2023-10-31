import {CanActivateFn, Router, UrlTree} from '@angular/router';
import {CountryService} from "../../services/country.service";
import {inject} from "@angular/core";

export const leagueGuard: CanActivateFn = (route, _state): boolean | UrlTree => {
  const param: string = String(route.params['country']);
  const isValid: boolean = inject(CountryService).isAValidCountry(param);
  return isValid ? true : inject(Router).createUrlTree(['/not-found']);
};
