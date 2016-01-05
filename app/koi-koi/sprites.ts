/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts"/>

import {Card} from '../cards';

export class CardSprite extends Phaser.Sprite {

  constructor(public game:Phaser.Game, public x:number, public y:number, private _card:Card) {
    super(game, x, y, _card.id);
  }

  get card():Card {
    return this._card;
  }
}

export class HiddenCardSprite extends Phaser.Sprite {

  constructor(public game:Phaser.Game, public x:number, public y:number, private _card:Card) {
    super(game, x, y, 'cardback');
  }

  get card():Card {
    return this._card;
  }
}
