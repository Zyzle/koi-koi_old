import {AfterContentInit, Component, Input} from 'angular2/core';

import {GameCard} from './gamecard';

import {Card} from '../../cards';

@Component({
  directives: [GameCard],
  selector: 'game-deal',
  template: `
    <div class="deckArea">
      <game-card class="deck" *ngIf="deckRemaining" [card]="null" [size]="cardSize"
        [faceUp]="false"></game-card>
    </div>

    <div class="dealArea">
      <div class="deal"  *ngIf="deal1">
        <game-card [card]="card" [size]="cardSize" *ngFor="#card of deal1" [faceUp]="true"
          class="container"></game-card>
      </div>

      <div class="deal" *ngIf="deal2">
        <game-card [card]="card" [size]="cardSize" *ngFor="#card of deal2" [faceUp]="true"
          class="container"></game-card>
      </div>
    </div>
  `,
  styles: [`
    .deckArea {
      display: flex;
      justify-content: center;
      margin-left: 40px;
      margin-right: 40px;
      min-width: 63px;
    }

    .deck {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .dealArea {
      width: 437px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 20px;
    }

    .deal {
      display: flex;
      overflow-x: hidden;
    }

    .container {
      overflow-x: hidden;
    }

    .container:last-child {
      flex: 0 0 auto;
    }
  `]
})
export class GameDeal implements AfterContentInit {

  @Input()
  deckRemaining:boolean;

  @Input()
  deal:Card[];

  cardSize = {width: '63px', height: '101px'};

  private _deal1:Card[];
  private _deal2:Card[];

  ngAfterContentInit() {
    this._deal1 = this.deal;
    if (this.deal.length > 4) {
      this._deal2 = this._deal1.splice(Math.floor(this.deal.length / 2));
    }

  }

  get deal1():Card[] {
    return this._deal1;
  }

  get deal2():Card[] {
    return this._deal2;
  }
}
