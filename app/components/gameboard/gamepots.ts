import {Component, Input} from 'angular2/core';

import {GameCard} from './gamecard';

import {Card, CardPots} from '../../cards';

@Component({
  selector: 'game-pots',
  templateUrl: 'app/components/gameboard/gamepots.html',
  styleUrls:['app/components/gameboard/gamepots.css']
})
export class GamePots {

  @Input()
  cardPots:CardPots;
}
