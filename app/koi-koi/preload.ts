/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts"/>

import {Card, Deck} from '../cards';

export class Preload extends Phaser.State {
  preloadBar: Phaser.Sprite;
  deck:Deck;

  preload() {
    this.preloadBar = this.add.sprite(400, 300, 'lb');
    this.preloadBar.anchor.setTo(0.5, 0.5);
    this.load.setPreloadSprite(this.preloadBar);

    this.load.image('background1', 'assets/background1.jpg');
    this.load.image('cardback', 'assets/cards/cardback.png');
    this.deck = new Deck();
    // we dont have direct access to the cards in the deck so just deal them all
    let cards:Card[] = this.deck.deal(48);
    for (var i = cards.length - 1; i >= 0; i--) {
      this.load.image(cards[i].id, 'assets/cards/' + cards[i].cardPng);
    }
  }

  create() {
    let tween = this.add.tween(this.preloadBar).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
    tween.onComplete.add(this.startMenu, this);
  }

  startMenu() {
    this.game.state.start('play', true, false);
  }
}
