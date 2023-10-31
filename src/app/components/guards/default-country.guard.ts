import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {CountryService} from "../../services/country.service";

export const defaultCountryGuard: CanActivateFn = (_route, _state) => {
  const countryName: string = inject(CountryService).defaultCountryName;
  return inject(Router).createUrlTree([countryName]);
};
