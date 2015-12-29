import {Component} from 'angular2/core';

import {Card, CardType, Deck} from '../../cards';

import {GameDeal} from './gamedeal';
import {GamePlayer} from './gameplayer';

@Component({
  directives: [GameDeal, GamePlayer],
  selector: 'game-board',
  template: `
  <div class="gameboard">
    <div class="cards">
      <game-player class="player" playerName="player2" [cards]="player1Cards"
        [player]="false"></game-player>
      <game-deal class="deal" [deckRemaining]="deckRemaining" [deal]="deal"></game-deal>
      <game-player class="player" playerName="player1" [cards]="player2Cards"
        [player]="true"></game-player>
    </div>
    <div class="pots">
    </div>
  </div>
  `,
  styles: [`
    .gameboard {
      width: 800px;
      height: 600px;
      background: url(assets/background1.jpg);
      display: flex;
      flex-direction: row;
      align-items: stretch;
    }

    .player {
      height: 140px;
      width: 600px;
    }

    .cards {
      height 100%;
      display: flex;
      flex-direction: column;
    }

    .pots {
      flex-grow: 1;
      height 100%;
    }

    .deal {
      width: 600px;
      flex-grow: 1;
      display: flex;
      flex-direction: row;
    }
  `]
})
export class GameBoard {

  private _deck:Deck;
  private _player1Cards:Card[];
  private _player2Cards:Card[];
  private _deal:Card[];

  constructor(){
    this._deck = new Deck();
    this._deck.shuffle();
    this._player1Cards = this._deck.deal(8);
    this._player2Cards = this._deck.deal(8);
    this._deal = this._deck.deal(8);
  }

  get player1Cards():Card[] {
    return this._player1Cards;
  }

  get player2Cards():Card[] {
    return this._player2Cards;
  }

  get deckRemaining():boolean {
    return true;
  }

  get deal():Card[] {
    return this._deal;
  }
}
