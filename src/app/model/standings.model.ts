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

export interface TeamStats {
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
  description: string | null
  all: Matches
  home: Matches
  away: Matches
  update: string
}

export interface StandingsResponse {
  league: {
    id: number
    name: string
    country: string
    logo: string
    flag: string
    season: number
    standings: [TeamStats[]]
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
  paging?: {
    current: number
    total: number
  }
  response: StandingsResponse[]
}

export interface StandingsTableElement {
  position: number
  teamId: number
  image: string
  name: string
  games: number
  win: number
  lose: number
  draw: number
  goalDifference: number
  points: number
}
