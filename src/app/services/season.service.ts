import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  private offset: number = 3;

  public getSeason(): number {
    return new Date().getFullYear() - this.offset;
  }
}
