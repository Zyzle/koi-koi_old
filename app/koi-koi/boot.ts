/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts"/>

export class Boot extends Phaser.State {

  preload() {
    this.load.image('lb', 'assets/loading.png');
  }

  create() {
    // disable multi-touch
    this.input.maxPointers = 1;
    // pause on window lose focus
    this.stage.disableVisibilityChange = true;

    this.game.state.start('preload', true, false);
  }

}
