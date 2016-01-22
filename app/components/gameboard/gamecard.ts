import {AfterContentInit, Component, Input, ViewEncapsulation} from 'angular2/core';

import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';

import {Card} from '../../cards';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'game-card',
  templateUrl: 'app/components/gameboard/gamecard.html',
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

  private _selected:boolean;

  private _svg:string;

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
        this._svg = svg.text();
      });
  }

  get selected():boolean {
    return this._selected;
  }

  set selected(selected:boolean) {
    this._selected = selected;
  }

}
