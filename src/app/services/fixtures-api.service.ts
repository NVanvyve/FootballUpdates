import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {FixturesApiResponse, FixturesResponse, FixtureTableElement, Team, TeamDetails} from "../model/fixtures.model";

@Injectable({
  providedIn: 'root'
})
export class FixturesApiService {
  private readonly baseUrl: string = `https://v3.football.api-sports.io/fixtures`

  constructor(private http: HttpClient) {
  }

  private getFixtures(teamId: number, leagueId: number): Observable<FixturesApiResponse> {
    const limit: number = 10
    const timeZone: string = `Europe/Brussels`;
    const url: string = `${this.baseUrl}?league=${leagueId}&season=${this.getCurrentSeason()}&team=${teamId}&last=${limit}&timezone=${timeZone}`;
    return this.http.get<FixturesApiResponse>(url);
  }


  public getFixturesTeamId(teamId: number, leagueId: number): Observable<TeamDetails> {
    return this.getFixtures(teamId, leagueId).pipe(
      map((fixturesApiResponse: FixturesApiResponse) => this.mapToTeamDetails(fixturesApiResponse, teamId)),
    )
  }

  private mapToTeamDetails(fixturesApiResponse: FixturesApiResponse, teamId: number): TeamDetails {
    const response: FixturesResponse[] = fixturesApiResponse.response
    const teamDetails: TeamDetails = {
      table: response.map((fixture) => this.toTableElement(fixture)),
      team: this.getTeam(response, teamId)
    }
    return teamDetails
  }

  private getTeam(response: FixturesResponse[], teamId: number): TeamDetails["team"] {
    const team: Team = response[0].teams.home.id === teamId ? response[0].teams.home : response[0].teams.away;
    return {
      name: team.name,
      image: team.logo
    }
  }

  private getCurrentSeason(): number {
    return new Date().getFullYear();
  }

  private toTableElement(fixture: FixturesResponse): FixtureTableElement {
    return {
      imageHome: fixture.teams.home.logo,
      nameHome: fixture.teams.home.name,
      score: {
        home: this.getScore(fixture.goals.home),
        away: this.getScore(fixture.goals.away)
      },
      nameAway: fixture.teams.away.name,
      imageAway: fixture.teams.away.logo
    }
  }

  private getScore(score: number | null): string {
    return score ? score.toString() : '0';
  }
}
