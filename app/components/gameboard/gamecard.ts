import {Component, EventEmitter, Input, Output} from 'angular2/core';

import {Card} from '../../cards';

@Component({
  selector: 'game-card',
  template: `
    <img [style.height]="height" [src]="cardImage" [attr.alt]="cardAlt"
      (click)="cardClick($event)" class="playingCard" />
  `,
  styleUrls: ['app/components/gameboard/gamecard.css']
})
export class GameCard {
  @Input()
  card:Card;

  @Input()
  height:string;

  @Input()
  faceUp:boolean;

  @Output()
  cardSelect:EventEmitter<Card> = new EventEmitter();

  get cardImage():string {
    if (this.faceUp) {
      return 'assets/cards/' + this.card.id + '.svg';
    }
    else {
      return 'assets/cards/cardback.svg';
    }
  }

  get cardAlt():string {
    if (this.faceUp) {
      return this.card.id;
    }
    else {
      return 'card';
    }
  }

  cardClick(clickEvent) {
    if (this.faceUp){
      this.cardSelect.emit(this.card);
    }
  }
}
