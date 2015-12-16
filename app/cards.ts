export enum CardType {PLAIN, ANIMAL, RIBBON, BRIGHT};

export class Card {
  private _suit:number;
  private _cardNum:number;
  private _cardType: CardType;
  private _points:number;
  private _cardId:string;

  constructor(suit:number, cardNum:number, type:CardType, points:number) {
    this._suit = suit;
    this._cardNum = cardNum;
    this._cardType = type;
    this._points = points;
    this._cardId = this._suit + '-' + this._cardNum;
  }

  get id():string {
    return this._cardId;
  }

  get suit():number {
    return this._suit;
  }

  get cardNum():number {
    return this._cardNum;
  }

  get type():CardType {
    return this._cardType;
  }

  get points():number {
    return this._points;
  }

  get cardSvg():string {
    return this._cardId + '.svg';
  }

}

export class Deck {
  private _cards:Card[];

  constructor() {
    this._cards = [
      // jan
      new Card(1, 1, CardType.PLAIN, 1), new Card(1, 2, CardType.PLAIN, 1),
      new Card(1, 3, CardType.RIBBON, 5), new Card(1, 4, CardType.BRIGHT, 20),
      // feb
      new Card(2, 1, CardType.PLAIN, 1), new Card(2, 2, CardType.PLAIN, 1),
      new Card(2, 3, CardType.RIBBON, 5), new Card(2, 4, CardType.ANIMAL, 10),
      // mar
      new Card(3, 1, CardType.PLAIN, 1), new Card(3, 2, CardType.PLAIN, 1),
      new Card(3, 3, CardType.RIBBON, 5), new Card(3, 4, CardType.BRIGHT, 20),
      // apr
      new Card(4, 1, CardType.PLAIN, 1), new Card(4, 2, CardType.PLAIN, 1),
      new Card(4, 3, CardType.RIBBON, 5), new Card(4, 4, CardType.ANIMAL, 10),
      // may
      new Card(5, 1, CardType.PLAIN, 1), new Card(5, 2, CardType.PLAIN, 1),
      new Card(5, 3, CardType.RIBBON, 5), new Card(5, 4, CardType.ANIMAL, 10),
      // jun
      new Card(6, 1, CardType.PLAIN, 1), new Card(6, 2, CardType.PLAIN, 1),
      new Card(6, 3, CardType.RIBBON, 5), new Card(6, 4, CardType.ANIMAL, 10),
      // jul
      new Card(7, 1, CardType.PLAIN, 1), new Card(7, 2, CardType.PLAIN, 1),
      new Card(7, 3, CardType.RIBBON, 5), new Card(7, 4, CardType.ANIMAL, 10),
      // aug
      new Card(8, 1, CardType.PLAIN, 1), new Card(8, 2, CardType.PLAIN, 1),
      new Card(8, 3, CardType.ANIMAL, 10), new Card(8, 4, CardType.BRIGHT, 20),
      // sep
      new Card(9, 1, CardType.PLAIN, 1), new Card(9, 2, CardType.PLAIN, 1),
      new Card(9, 3, CardType.RIBBON, 5), new Card(9, 4, CardType.ANIMAL, 10),
      // oct
      new Card(10, 1, CardType.PLAIN, 1), new Card(10, 2, CardType.PLAIN, 1),
      new Card(10, 3, CardType.RIBBON, 5), new Card(10, 4, CardType.ANIMAL, 10),
      // nov
      new Card(11, 1, CardType.PLAIN, 1), new Card(11, 2, CardType.RIBBON, 5),
      new Card(11, 3, CardType.ANIMAL, 10), new Card(11, 4, CardType.BRIGHT, 20),
      // dec
      new Card(12, 1, CardType.PLAIN, 1), new Card(12, 2, CardType.PLAIN, 1),
      new Card(12, 3, CardType.PLAIN, 1), new Card(12, 4, CardType.BRIGHT, 20)
    ];
  }

  get size():number {
    return this._cards.length;
  }

  shuffle():void {
    let m = this._cards.length;
    let t, i = 0;
    while(m) {
      i = Math.floor(Math.random() * m--);
      t = this._cards[m];
      this._cards[m] = this._cards[i];
      this._cards[i] = t;
    }
  }

}
