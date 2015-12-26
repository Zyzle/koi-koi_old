import {Component} from 'angular2/core';

import {GameDeal} from './gamedeal';
import {GamePlayer} from './gameplayer';

@Component({
  directives: [GameDeal, GamePlayer],
  selector: 'game-board',
  template: `
  <div class="gameboard">
    <div class="cards">
      <game-player playerName="player2"></game-player>
      <game-deal class="deal"></game-deal>
      <game-player playerName="player1"></game-player>
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

    .cards {
      flex-grow: 3;
      height 100%;
      background: rgba(255, 0, 0, .2);
      display: flex;
      flex-direction: column;
    }

    .pots {
      flex-grow: 1;
      height 100%;
      background: rgba(0, 255, 0, .2);
    }

    .deal {
      flex-grow: 1;
    }
  `]
  /*templateUrl: 'gameboard.html',
  styleUrls: ['gameboard.css'] */
})
export class GameBoard {

}
