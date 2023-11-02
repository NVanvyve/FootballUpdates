import {Injectable} from '@angular/core';
import {StandingsApiResponse, StandingsResponse, StandingsTableElement, TeamStats} from "../model/standings.model";
import {map, Observable, tap} from "rxjs";
import {FootballCountry} from "../model/football-country.model";
import {CountryService} from "./country.service";
import {FootballApiService} from "./football-api.service";

@Injectable({
  providedIn: 'root'
})
export class StandingsApiService {

  private readonly baseUrl: string = 'standings';

  constructor(private countryService: CountryService, private footballApiService: FootballApiService) {
  }

  private getStandings(country: FootballCountry['name']): Observable<StandingsApiResponse> {
    const leagueId: number = this.getLeagueId(country);
    const season: number = this.getCurrentSeason();

    const url: string = `${this.baseUrl}?league=${leagueId.toString()}&season=${season.toString()}`;

    return this.footballApiService.get<StandingsApiResponse>(url).pipe(
      tap((response: StandingsApiResponse) => {
          if (response.errors) {
            this.throwError(response);
          }
        }
      ));
  }

  private throwError(response: StandingsApiResponse): void {
    const code: string = Object.keys(response.errors)[0];
    const message: string = response.errors[code];
    throw new Error(`${code} : ${message}`);
  }

  private getLeagueId(country: string): number {
    return this.countryService.getCountry(country).leagueId;
  }

  private getCurrentSeason(): number {
    return new Date().getFullYear();
  }

  public getStandingsByCountry(country: FootballCountry['name']): Observable<StandingsTableElement[]> {
    return this.getStandings(country).pipe(
      map((standingsApiResponse: StandingsApiResponse) =>
        this.mapToTableElements(standingsApiResponse, country)),
    );
  }

  private mapToTableElements(standingsApiResponse: StandingsApiResponse, country: FootballCountry["name"]): StandingsTableElement[] {
    const response: StandingsResponse[] = standingsApiResponse.response;
    const find: StandingsResponse | undefined = response.find((r) => r.league.country.toLowerCase() === country.toLowerCase());
    if (!find) {
      throw new Error('Country not found in response');
    }
    const teamStats: TeamStats[] = find.league.standings[0];
    return teamStats
      .map((teamStats: TeamStats) => this.toTableEmelent(teamStats))
      .sort((a: StandingsTableElement, b: StandingsTableElement) => a.position - b.position);
  }

  private toTableEmelent(teamStats: TeamStats): StandingsTableElement {
    return {
      position: teamStats.rank,
      teamId: teamStats.team.id,
      image: teamStats.team.logo,
      name: teamStats.team.name,
      games: teamStats.all.played,
      win: teamStats.all.win,
      lose: teamStats.all.lose,
      draw: teamStats.all.draw,
      goalDifference: teamStats.goalsDiff,
      points: teamStats.points
    }
  }
}
