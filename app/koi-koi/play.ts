/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts"/>

import {Deck} from '../cards';

import {CpuGroup, DealGroup, PlayerGroup} from './groups';

export class Play extends Phaser.State {

  private _dealGroup:DealGroup;
  private _playerGroup:PlayerGroup;
  private _cpuGroup:CpuGroup;
  private _deck:Deck;

  create() {
    this.add.sprite(0, 0, 'background1');
    this._deck = new Deck();
    this._deck.shuffle();
    this._dealGroup = new DealGroup(this.game, this._deck.deal(8));
    this._cpuGroup = new CpuGroup(this.game, this._deck.deal(8));
    this._playerGroup = new PlayerGroup(this.game, this._deck.deal(8));
  }
}
