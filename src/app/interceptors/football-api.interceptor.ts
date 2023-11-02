import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {environment} from "../../environments/environment";
import {ApiFootballResponse, ErrorObject, ResponseError} from "../model/api-football-response.model";

@Injectable()
export class FootballApiInterceptor implements HttpInterceptor {
  private API_KEY: string = environment.apiKey;

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('v3.football.api-sports.io')) {
      const clone: HttpRequest<unknown> = request.clone({
        headers: request.headers
          .set('x-rapidapi-host', 'v3.football.api-sports.io')
          .set('x-rapidapi-key', this.API_KEY)
      });

      return next.handle(clone).pipe(
        tap((event: HttpEvent<unknown>) => {
          this.handleErrorInApiResponse(event);
        }));
    } else {
      return next.handle(request);
    }
  }

  private handleErrorInApiResponse(event: HttpEvent<unknown>): void {
    if (event instanceof HttpResponse) {
      const response: ApiFootballResponse = event['body'] as ApiFootballResponse;
      if (this.hasErrors(response.errors)) {
        this.throwError(response)
      }
    }
  }

  private hasErrors(errors: ResponseError): boolean {
    return Array.isArray(errors) ? errors.length > 0 : Object.keys(errors).length > 0;
  }

  private throwError(response: ApiFootballResponse): void {
    const errors: ErrorObject = response.errors as ErrorObject;
    const message: string = Object.keys(errors).map((code: string) => {
      return `${code.toUpperCase()} : ${errors[code]}`;
    }).join('; ');

    throw new Error(message);
  }
}
