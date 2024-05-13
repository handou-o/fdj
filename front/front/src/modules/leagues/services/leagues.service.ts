import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/**
 * TODO Add in proper type file
 */
export interface League {
  name: string;

  sport: string;
}


@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  constructor(private http: HttpClient) { }

  getLeagues(q:string) {
    return this.http.get<League[]>(`/api/leagues?q=${q}`);
  }
  
}
