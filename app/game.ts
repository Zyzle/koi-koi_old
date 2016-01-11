import {Component} from 'angular2/core';

//import {Game} from './koi-koi/game';
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
export class Main {

  //game:Game;

  constructor() {
    //this.game = new Game();
  }
}
