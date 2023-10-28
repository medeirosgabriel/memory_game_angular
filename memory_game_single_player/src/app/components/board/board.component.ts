import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {

  @Output() clear = new EventEmitter<any>()
  count: number = 0;
  cards: number[] = []
  lastCardNumber: number = -1;
  points: number = 0;
  moviments: number = 0;
  @Output() selected: number[] = []

  async createHandler(card: Card) {
    this.count += 1
    this.moviments += 1
    if (this.count == 2) {
      if (this.lastCardNumber == card.id) {
        this.selected.push(this.lastCardNumber)
        this.selected.push(card.id)
        this.points += 1
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

    let aux = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    aux = aux.concat(aux)
    aux.sort(() => Math.random() - 0.5);
    this.cards = aux

  }
}
