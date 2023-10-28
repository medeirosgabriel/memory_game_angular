import { Injectable } from '@angular/core';
import { Player } from '../models/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() {}

  players: Player[] = []

  addPlayer(name: string): void {
    let player: Player = {
      name: name,
      points: 0,
      moviments: 0
    }
    this.players.push(player)
  }
  
  getPlayers(): Player[] {
    console.log(this.players)
    return this.players;
  }
}
