import {Injectable} from '@angular/core';
import {StandingsApiResponse, StandingsResponse, StandingsTableElement, TeamStats} from "../model/standings.model";
import {delay, map, Observable, of} from "rxjs";
import {england2023} from "../fake-data/standing-api-england-2023";
import {FootballCountry} from "../model/football-country.model";
import {CountryService} from "./country.service";

@Injectable({
  providedIn: 'root'
})
export class StandingsApiService {
  constructor(private countryService: CountryService) {
  }

  private getStandings(_country: FootballCountry['name']): Observable<StandingsApiResponse> {
    // const _leagueId = this.countryService.getCountry(country).leagueId;
    // const _season = new Date().getFullYear();
    return of(england2023).pipe(delay(1000));
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
