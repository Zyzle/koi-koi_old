import {Component} from 'angular2/core';

import {GameBoard} from './components/gameboard/gameboard';

@Component({
  directives: [GameBoard],
  selector: 'game-main',
  styles: [`
    .main {
    }
  `],
  template: `
    <div class="main">
      <game-board></game-board>
    </div>
  `
})
export class Game {
}
