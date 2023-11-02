export interface ApiFootballResponse {
  get: 'fixtures' | 'standings'
  errors: ResponseError
  results: number
  paging?: {
    current: number
    total: number
  }
}

export type ResponseError = Array<unknown> | ErrorObject
export type ErrorObject = {
  [code: string]: string;
}
