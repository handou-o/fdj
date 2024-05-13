import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../../players/services/players.service';

export interface Team {
  _id: string;
  name: string;
  thumbnail: string;
}


@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  listTeams(id: string){
    return this.http.get<Team[]>(`/api/teams?league=${id}`)
  }

  listPlayers(id: string){
    return this.http.get<Player[]>(`/api/players?team=${id}`)
  }

  getTeam(id: string){
    return this.http.get<Team>(`/api/teams/${id}`)
  }
}
