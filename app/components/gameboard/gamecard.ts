import {AfterContentInit, Component, EventEmitter, Input, Output} from 'angular2/core';

import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';

import {Card} from '../../cards';

@Component({
  selector: 'game-card',
  template: `
  <div [style.height]="size.height" [style.width]="size.width"
    (click)="cardClick($event)" class="playingCard"
    [innerHtml]="svg"></div>
  `,
  styleUrls: ['app/components/gameboard/gamecard.css'],
  viewProviders: [HTTP_PROVIDERS]
})
export class GameCard implements AfterContentInit {
  @Input()
  card:Card;

  @Input()
  size;

  @Input()
  faceUp:boolean;

  @Output()
  cardSelect:EventEmitter<Card> = new EventEmitter();

  svg:string;

  constructor(private _http:Http) {

  }

  ngAfterContentInit() {
    let url;
    if (this.faceUp){
      url = 'assets/cards/' + this.card.id + '.svg'
    }
    else {
      url = 'assets/cards/cardback.svg'
    }

    this._http.get(url)
      .subscribe((svg:Response) => {
        this.svg = svg.text();
      });
  }

  cardClick(clickEvent) {
    if (this.faceUp){
      this.cardSelect.emit(this.card);
    }
  }
}
