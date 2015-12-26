import {Component, Input} from 'angular2/core';

import {Card} from '../../cards';

@Component({
  selector: 'game-card',
  template: `
    <img [style.height]="size.height" [style.width]="size.width"
      [src]="cardImage" [attr.alt]="card.id" />
  `,
  styles: [`
  `]
})
export class GameCard {
  @Input()
  card:Card;

  @Input()
  size;

  get cardImage():string {
    return 'assets/cards/' + this.card.id + '.svg';
  }
}
