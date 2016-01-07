/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts"/>

import {Deck} from '../cards';

import {CpuGroup, DealGroup, DeckGroup, PlayerGroup} from './groups';
import {CardSprite} from './sprites';

export class Play extends Phaser.State {

  private _dealGroup:DealGroup;
  private _playerGroup:PlayerGroup;
  private _cpuGroup:CpuGroup;
  private _deck:Deck;
  private _deckGroup:DeckGroup;

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.add.sprite(0, 0, 'background1');
    this._deck = new Deck();
    this._deck.shuffle();

    this._dealGroup = new DealGroup(this.game, this._deck.deal(8));
    this.game.physics.arcade.enable(this._dealGroup);
    this._cpuGroup = new CpuGroup(this.game, this._deck.deal(8));

    this._playerGroup = new PlayerGroup(this.game, this._deck.deal(8));
    this.game.physics.arcade.enable(this._playerGroup);
    this._playerGroup.callAll('events.onDragStart.add', 'events.onDragStart', this.dragStart, this);
    this._playerGroup.callAll('events.onDragStop.add', 'events.onDragStop', this.dragStop, this);

    this._deckGroup = new DeckGroup(this.game, this._deck);
  }

  dragStart(sprite:CardSprite, pointer:Phaser.Pointer) {
    this._dealGroup.forEach((item:CardSprite) => {
      if (item.card.suit === sprite.card.suit) {
        item.tint = 0xfff380;
      }
    }, this);
  }

  dragStop(sprite:CardSprite, pointer:Phaser.Pointer) {
    this._dealGroup.forEach((item:CardSprite) => {

      this.game.physics.arcade.overlap(sprite, item, (card1:CardSprite, card2:CardSprite) => {
        if (card1.card.suit === card2.card.suit) {
          this._playerGroup.remove(card1);
          this._dealGroup.remove(card2);
        }
      });

      item.tint = 0xffffff;
    }, this);

    sprite.position.copyFrom(sprite.originalPosition);
  }

}
