import {Injectable} from '@angular/core';
import {StandingsApiResponse, StandingsResponse, StandingsTableElement, TeamStats} from "../model/standings.model";
import {map, Observable} from "rxjs";
import {FootballCountry} from "../model/football-country.model";
import {CountryService} from "./country.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StandingsApiService {

  private readonly baseUrl: string = `https://v3.football.api-sports.io/standings`

  constructor(
    private countryService: CountryService,
    private http: HttpClient) {
  }

  private getStandings(country: FootballCountry['name']): Observable<StandingsApiResponse> {
    const leagueId: number = this.getLeagueId(country);
    const season: number = this.getCurrentSeason();

    const url: string = `${this.baseUrl}?league=${leagueId.toString()}&season=${season.toString()}`;

    return this.http.get<StandingsApiResponse>(url);
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
      .map((teamStats: TeamStats) => this.toTableElement(teamStats))
      .sort((a: StandingsTableElement, b: StandingsTableElement) => a.position - b.position);
  }

  private toTableElement(teamStats: TeamStats): StandingsTableElement {
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
