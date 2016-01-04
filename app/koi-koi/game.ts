/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts"/>

import {Boot} from './boot';
import {Preload} from './preload';
import {TitleScreen} from './title';
import {Play} from './play';

export class Game extends Phaser.Game {

    constructor() {
      super(800, 600, Phaser.AUTO, '');

      this.state.add('boot', Boot, true);
      this.state.add('preload', Preload);
      //this.state.add('title_screen', TitleScreen);
      this.state.add('play', Play);

    }

}
