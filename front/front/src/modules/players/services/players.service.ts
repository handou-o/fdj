import { Injectable } from '@angular/core';

export interface signIn {
  amount: number;
  currency: string;
}

export interface Player {
  _id: string;
  name: string;
  position: string;
  thumbnail: string;  
  born: Date;
  signin: signIn[];
}


@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }
}
