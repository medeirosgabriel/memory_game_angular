import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() clearEmitter?: EventEmitter<void>; 
  @Output() onClick = new EventEmitter<Card>()
  @Input() card?: number;
  @Input() selected?: number[];
  @Input() count?: number;
  
  currentImage: number = 0;

  ngOnInit(): void {
    this.clearEmitter!.subscribe((data: any) => {
      if (!this.selected!.includes(this.card!)) {
        this.currentImage = 0;
      }
    });
  }
  
  changeImage() {
    if (this.count != 2) {
      this.onClick.emit({"id": this.card!})
      this.currentImage = this.card!;
    }
  }
}
