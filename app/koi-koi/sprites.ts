/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts"/>

import {Card} from '../cards';

export class CardSprite extends Phaser.Sprite {

  private _originalPosition:Phaser.Point = new Phaser.Point();

  constructor(public game:Phaser.Game, public x:number, public y:number, private _card:Card) {
    super(game, x, y, _card.id);
    this.position.copyTo(this._originalPosition);
  }

  get card():Card {
    return this._card;
  }

  get originalPosition():Phaser.Point {
    return this._originalPosition;
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
