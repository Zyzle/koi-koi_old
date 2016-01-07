/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts"/>

import {Card, Deck} from '../cards';

import {CardSprite, HiddenCardSprite} from './sprites';

export class DealGroup extends Phaser.Group {

  constructor(public game:Phaser.Game, private _cards:Card[]) {
    super(game);
    this.layout();
  }

  layout() {
    for (var i = this._cards.length - 1; i >= 0; i--) {
      var y = i % 2 === 0 ?  195 : 305;
      var x = i % 2 === 0 ? ((i / 2) * 73) + 143 : (((i - 1) / 2) * 73) + 143;
      this.add(new CardSprite(this.game, x, y, this._cards[i]));
    }
  }

}

export class PlayerGroup extends Phaser.Group {

  constructor(public game:Phaser.Game, private _cards:Card[]) {
    super(game);
    this.layout();
  }

  layout() {
    for (var i = this._cards.length - 1; i >= 0; i--) {
      var card = new CardSprite(this.game, (i * 68) + 20, 480, this._cards[i]);
      card.inputEnabled = true;
      card.input.enableDrag();
      this.add(card);
    }
  }

}

export class CpuGroup extends Phaser.Group {

  constructor(public game:Phaser.Game, private _cards:Card[]) {
    super(game);
    this.layout();
  }

  layout() {
    for (var i = this._cards.length - 1; i >= 0; i--) {
      this.add(new HiddenCardSprite(this.game, (i * 68) + 20, 20, this._cards[i]));
    }
  }

}

export class DeckGroup extends Phaser.Group {

  constructor(public game:Phaser.Game, private _deck:Deck) {
    super(game);
    this.layout();
  }

  layout() {
    let x = 40;
    let y = 250;

    for (var i = this._deck.size - 1; i >= 0; i--) {
      this.add(new HiddenCardSprite(this.game, x, y));
      x -= 0.1;
      y -= 0.1;
    }
  }
}
