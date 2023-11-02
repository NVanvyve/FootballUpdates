import {ApiFootballResponse} from "./api-football-response.model";

interface Score {
  home: number | null
  away: number | null
}

export interface Team {
  id: number
  name: string
  logo: string
  winner: boolean | null
}

export interface FixturesResponse {
  fixture: {
    id: number
    referee: string
    timezone: string
    date: string
    timestamp: number
    periods: {
      first: number | null
      second: number | null
    }
    venue: {
      id: number
      name: string
      city: string
    }
    status: {
      long: string
      short: string
      elapsed: number | null
    }
  },
  league: {
    id: number
    name: string
    country: string
    logo: string
    flag: string
    season: number
    round: string
  },
  teams: {
    home: Team,
    away: Team,
  },
  goals: Score,
  score: {
    halftime: Score,
    fulltime: Score,
    extratime: Score,
    penalty: Score,
  },
}

export interface FixturesApiResponse extends ApiFootballResponse {
  get: 'fixtures'
  parameters: {
    league: string
    season: string
    team: string
    timezone: string
    last: string
  }
  response: FixturesResponse[]
}

export interface FixtureTableElement {
  imageHome: string;
  nameHome: string;
  score: {
    home: string;
    away: string;
  },
  nameAway: string;
  imageAway: string;
}

export interface TeamDetails {
  table: FixtureTableElement[]
  team: {
    name: string
    image: string
  }
}
