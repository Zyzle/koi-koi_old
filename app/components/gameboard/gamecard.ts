import {AfterContentInit, Component, EventEmitter, Input, Output, ViewEncapsulation} from 'angular2/core';

import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';

import {Card} from '../../cards';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'game-card',
  template: `
  <div [style.height]="size.height" [style.width]="size.width" class="playingCard"
    [innerHtml]="svg" [ngClass]="{cardSelected: selected}"></div>
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

  @Input()
  selected:boolean;

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

}
