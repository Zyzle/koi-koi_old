import {beforeEach, describe, expect, it, xit} from 'angular2/testing';

import {Card, CardType, Deck} from '../../app/cards';

describe('A Card', () => {
  let card:Card;

  beforeEach(() => {
    card = new Card(1, 1, CardType.PLAIN,  1);
  });

  it('should have a suit number', () => {
    expect(card.suit).toBe(1);
  });

  it('should have a card number', () => {
    expect(card.cardNum).toBe(1);
  });

  it('should have a card tpe', () => {
    expect(card.type).toBe(CardType.PLAIN);
  })

  it('shold have a points value', () => {
    expect(card.points).toBe(1);
  });

  it('should have an svg image', () => {
    expect(card.cardSvg).toEqual('1-1.svg');
  });

  it('should have an id', () => {
    expect(card.id).toEqual('1-1');
  });

});

describe('A Deck', () => {
  let deck:Deck;

  beforeEach(() => {
    deck = new Deck();
  });

  it('should start with 48 cards', () => {
    expect(deck.size).toBe(48);
  });

  xit('should shuffle deck', () => {

  });

  xit('should deal a card and remove it', () => {

  });

  xit('should dead x cards and remove them', () => {

  });

});
