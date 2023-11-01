interface Matches {
  played: number
  win: number
  draw: number
  lose: number
  goals: {
    for: number
    against: number
  }
}

interface StandingsResponse {
  league: {
    id: number
    name: string
    logo: string
    flag: string
    season: number

    standings: [
      {
        rank: number
        team: {
          id: number
          name: string
          logo: string
        }
        points: number
        goalsDiff: number
        group: string
        form: string
        status: string
        description: string
        all: Matches
        home: Matches
        away: Matches
        update: string
      }
    ]
  }
}

export interface StandingsApiResponse {
  get: string
  parameters: {
    league: string
    season: string
  }
  errors: string[]
  results: number
  response: StandingsResponse[]
}
