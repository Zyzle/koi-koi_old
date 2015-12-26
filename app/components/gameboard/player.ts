import {Component, Input} from 'angular2/core';

@Component({
  selector: 'player',
  template: `
    <div [attr.id]="playerName" class="player"></div>
  `,
  styles: [`
    .player {
      height: 140px;
      background: rgba(0, 0, 255, .2);
    }
  `],

})
export class Player {
  @Input()
  playerName:string;
}
