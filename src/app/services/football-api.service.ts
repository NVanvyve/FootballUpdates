import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FootballApiService {

  private readonly baseUrl: string = 'https://v3.football.api-sports.io/';

  constructor(private http: HttpClient) {
  }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${url}`, this.getHeaders())
      .pipe();

  }

  private getHeaders(): Headers {
    return {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      })
    }
  }
}

type Headers = {
  headers: HttpHeaders | {
    [header: string]: string | string[];
  }
}
