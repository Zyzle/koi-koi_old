import {AfterContentInit, Component, Input, ViewChildren} from 'angular2/core';

import {GameCard} from './gamecard';

import {Card} from '../../cards';

@Component({
  directives: [GameCard],
  selector: 'game-deal',
  templateUrl: 'app/components/gameboard/gamedeal.html',
  styleUrls: ['app/components/gameboard/gamedeal.css']
})
export class GameDeal implements AfterContentInit {

  @Input()
  deckRemaining:boolean;

  @Input()
  deal:Card[];

  @ViewChildren(GameCard)
  cardComponents:GameCard[];

  cardSize = {height: '101px', width: '64px'};

  private _deal1:Card[];
  private _deal2:Card[];

  ngAfterContentInit() {
    this._deal1 = this.deal;
    if (this.deal.length > 4) {
      this._deal2 = this._deal1.splice(Math.floor(this.deal.length / 2));
    }

  }

  highlightSuit(suit:number){
    this.cardComponents.map((cardComp:GameCard) => {
      if (cardComp.card){
        cardComp.selected = suit == cardComp.card.suit;
      }
    });
  }

  get deal1():Card[] {
    return this._deal1;
  }

  get deal2():Card[] {
    return this._deal2;
  }
}
