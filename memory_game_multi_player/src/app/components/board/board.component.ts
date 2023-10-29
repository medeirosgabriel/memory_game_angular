import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { Player } from 'src/app/models/Player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})

export class BoardComponent implements OnInit {

  @Output() clear = new EventEmitter<any>()
  @Output() selected: number[] = []

  players?: Player[];

  count: number = 0;
  cards: number[] = []
  lastCardNumber: number = -1;
  points: number = 0;
  moviments: number = 0;
  playerIndex: number = 0;

  constructor(private playerService: PlayerService) {}

  async createHandler(card: Card) {
    this.count += 1
    this.players![this.playerIndex].moviments += 1
    if (this.count == 2) {
      if (this.lastCardNumber == card.id) {
        this.players![this.playerIndex].points += 1
        this.selected.push(this.lastCardNumber)
        this.selected.push(card.id)
        this.points += 1
      } else {
        this.playerIndex += 1
        if (this.playerIndex == this.players?.length) {
          this.playerIndex = 0;
        }
      }
      setTimeout(() => {
        this.clear.emit()
        this.count = 0
      }, 1000)

    } else {
      this.lastCardNumber = card.id;
    }
  }

  ngOnInit(): void {
    this.players = this.playerService.getPlayers()
    
    let aux = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    aux = aux.concat(aux)
    aux.sort(() => Math.random() - 0.5);
    this.cards = aux
  }
}
