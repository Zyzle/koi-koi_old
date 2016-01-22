import {Component, EventEmitter, Input, Output, QueryList, ViewChildren} from 'angular2/core';

import {Card} from '../../cards';

import {GameCard} from './gamecard';

@Component({
  directives: [GameCard],
  selector: 'game-player',
  templateUrl: 'app/components/gameboard/gameplayer.html',
  styleUrls: ['app/components/gameboard/gameplayer.css'],
})
export class GamePlayer {
  @Input()
  playerName:string;

  @Input()
  cards:Card[] = [];

  @Input()
  player:boolean;

  @Output()
  cardSelected:EventEmitter<Card> = new EventEmitter<Card>();

  cardSize = {height: '101px', width: '64px'};

  @ViewChildren(GameCard)
  cardComponents:QueryList<GameCard>;

  cardClick(card:Card) {
    this.cardComponents.map((cardComp:GameCard) => {
      cardComp.selected = card.id == cardComp.card.id;
    });

    this.cardSelected.emit(card);
  }
}
