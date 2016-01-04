/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts"/>

export class Preload extends Phaser.State {
  preloadBar: Phaser.Sprite;

  preload() {
    this.preloadBar = this.add.sprite(400, 300, 'lb');
    this.load.setPreloadSprite(this.preloadBar);

    this.load.image('background1', 'assets/background1.jpg');
  }

  create() {
    let tween = this.add.tween(this.preloadBar).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
    tween.onComplete.add(this.startMenu, this);
  }

  startMenu() {
    this.game.state.start('play', true, false);
  }
}
