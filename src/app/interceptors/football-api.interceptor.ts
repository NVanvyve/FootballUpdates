import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {environment} from "../../environments/environment";
import {ApiFootballResponse, ErrorObject, ResponseError} from "../model/api-football-response.model";
import {StandingsApiResponse} from "../model/standings.model";
import {FixturesApiResponse} from "../model/fixtures.model";

interface CacheEntry {
  date: string
  data: ApiFootballResponse
}

@Injectable()
export class FootballApiInterceptor implements HttpInterceptor {
  private API_KEY: string = environment.apiKey;

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('v3.football.api-sports.io')) {
      // Check if item is in cache
      const key: string = this.buildKey(request);
      const item: string | null = localStorage.getItem(key);
      if (item) {
        const cachedEntry: CacheEntry = JSON.parse(item) as CacheEntry
        const date: string = this.getDateOfToday();
        if (cachedEntry.date === date) {
          return this.getObservable(cachedEntry);
        } else {
          localStorage.removeItem(key); // Result is outdated
        }
      }
      // If not relevant, make the request
      return next.handle(this.httpRequestWithHeader(request)).pipe(
        tap((event: HttpEvent<unknown>) => {
          // Format the error message
          this.handleErrorInApiResponse(event);
          this.cacheResults(event);
        }));
    } else {
      return next.handle(request);
    }
  }

  private httpRequestWithHeader(request: HttpRequest<unknown>): HttpRequest<unknown> {
    return request.clone({
      headers: request.headers
        .set('x-rapidapi-host', 'v3.football.api-sports.io')
        .set('x-rapidapi-key', this.API_KEY)
    });
  }

  private getObservable(cachedEntry: CacheEntry): Observable<HttpEvent<ApiFootballResponse>> {
    return new Observable<HttpEvent<ApiFootballResponse>>((observer) => {
      observer.next(new HttpResponse<ApiFootballResponse>({
        body: cachedEntry.data
      }));
      observer.complete();
    });
  }

  private buildKey(request: HttpRequest<unknown>): string {
    const league: string = request.url.split('league=')[1].split('&')[0];
    if (request.url.includes('standings')) {
      return `standings-${league}`;
    } else {
      const team: string = request.url.split('team=')[1].split('&')[0];
      return `fixtures-${league}-${team}`;
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

  private cacheResults(event: HttpEvent<unknown>): void {
    if (event instanceof HttpResponse) {
      const response: ApiFootballResponse = event['body'] as ApiFootballResponse;
      const get: ApiFootballResponse['get'] = response.get;
      let key: string;
      if (get === 'standings') {
        const standingsApiResponse: StandingsApiResponse = response as StandingsApiResponse;
        key = `standings-${standingsApiResponse.parameters.league}`;
      } else {
        const fixturesApiResponse: FixturesApiResponse = response as FixturesApiResponse;
        key = `fixtures-${fixturesApiResponse.parameters.league}-${fixturesApiResponse.parameters.team}`;
      }
      const date: string = this.getDateOfToday();
      const entry: CacheEntry = {
        date,
        data: response
      };
      localStorage.setItem(key, JSON.stringify(entry));
    }
  }

  private getDateOfToday(): string {
    const date: Date = new Date();
    return date.toISOString().split('T')[0];
  }
}

