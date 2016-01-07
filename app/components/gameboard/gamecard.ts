import {Component, Input} from 'angular2/core';

import {Card} from '../../cards';

@Component({
  selector: 'game-card',
  template: `
    <img [style.height]="size.height" [style.width]="size.width"
      [src]="cardImage" [attr.alt]="cardAlt" class="playingCard" />
  `,
  styles: [`
    .playingCard {
      box-shadow: 2px 0 5px 0 rgba(0,0,0,0.75);
    }
  `]
})
export class GameCard {
  @Input()
  card:Card;

  @Input()
  size:any;

  @Input()
  faceUp: boolean;

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
}
