"use strict";
var play = function(game){
    /**
     * This code was removed from the game.js file, it will become our
     * play state
     */

    var stack;
    var dealer;
    var gameBoard;
    var cpu;
    var player2Cards;
    var potCards;
    var selectedCard = {};

};

play.prototype.create = function(){
    this.game.add.sprite(0, 0, "background1");

    this.stack = new Cards.Stack(Cards.deck);
    this.dealer = new Cards.Dealer(this.stack);

    this.cpu = new CpuGroup(this.game, this.dealer.deal());

    this.player = new PlayerGroup(this.game, this.dealer.deal());
    this.player.setAll('inputEnabled', true);
    this.player.callAll('events.onInputDown.add', 'events.onInputDown', this.cardClick, this);

    this.potCards = new PotGroup(this.game, this.dealer.deal());
    this.potCards.setAll('inputEnabled', true);
    this.potCards.callAll('events.onInputDown.add', 'events.onInputDown', this.potClick, this);
};

play.prototype.update = function(){
    if (typeof this.selectedCard !== 'undefined'){
        this.selectedCard.tint = 0xff0000;

        for (var i = this.potCards.children.length - 1; i >= 0; i--) {
            if (this.potCards.children[i].getCard().getSuit() === this.selectedCard.getCard().getSuit()){
                this.potCards.children[i].tint = 0x0000ff;
            }
            else {
                this.potCards.children[i].tint = 0xffffff;
            }
        };
    }

};

play.prototype.cardClick = function(card, pointer){
    if (typeof this.selectedCard !== 'undefined' && this.selectedCard !== card){
        this.selectedCard.tint = 0xffffff;
    }

    this.selectedCard = card;
}

play.prototype.potClick = function(card, pointer){
    if (typeof this.selectedCard !== 'undefined'){

    }
}
