import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private _error: Error | undefined;
  get error(): Error | undefined {
    const currentError: Error | undefined = this._error;
    this._error = undefined;
    return currentError;
  }

  constructor(private router: Router) {
  }

  public handleError(error: Error): void {
    console.error(error.name + ': ' + error.message);
    this._error = error;
    void this.router.navigate(['/error'])
  }
}
