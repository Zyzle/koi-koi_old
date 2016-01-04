import {Component} from 'angular2/core';

import {Game} from './koi-koi/game';

@Component({
  //directives: [GameBoard],
  selector: 'game-main',
  styles: [`
    .main {
    }
  `],
  template: `
    <div class="main">
    </div>
  `
})
export class Main {

  game:Game;

  constructor() {
    this.game = new Game();
  }
}
