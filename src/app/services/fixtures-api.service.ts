import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {tottenham2023} from "../fake-data/fixtures-api-tottenham";
import {FixturesApiResponse, FixturesResponse, FixtureTableElement, TeamDetails} from "../model/fixtures.model";

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
    console.log(url)
    return of(tottenham2023)
  }


  public getFixturesTeamId(teamId: number, leagueId: number): Observable<TeamDetails> {
    return this.getFixtures(teamId, leagueId).pipe(
      map((fixturesApiResponse: FixturesApiResponse) => this.mapToTeamDetails(fixturesApiResponse)),
    )
  }

  private mapToTeamDetails(fixturesApiResponse: FixturesApiResponse): TeamDetails {
    const response: FixturesResponse[] = fixturesApiResponse.response
    const teamDetails: TeamDetails = {
      table: response.map((fixture) => this.toTableElement(fixture))
    }
    return teamDetails
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
