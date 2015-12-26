import {Component, Input} from 'angular2/core';

@Component({
  selector: 'game-card',
  template: `
    <div class="card">
      <img [src]="cardImage" [attr.alt]="cardId" />
    </div>
  `
})
export class GameCard {

}
