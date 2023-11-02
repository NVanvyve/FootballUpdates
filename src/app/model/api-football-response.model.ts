export interface ApiFootballResponse {
  get: 'fixtures' | 'standings'
  errors: ResponseError
  results: number
  paging?: {
    current: number
    total: number
  }
}

type ResponseError = {
  [code: string]: string;
}
