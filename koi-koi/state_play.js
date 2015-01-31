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

}

play.prototype.create = function(){
    this.game.add.sprite(0, 0, "background1");

    this.stack = new Cards.Stack(Cards.deck);
    this.dealer = new Cards.Dealer(this.stack);
    this.board = new Board.Gameboard();
    this.board.player1.giveCards(this.dealer.deal());
    this.board.player2.giveCards(this.dealer.deal());
    this.board.pot.giveCards(this.dealer.deal());

    this.cpu = this.game.add.group();

    for (var i = this.board.player1.cardCount() - 1; i >= 0; i--) {
        this.cpu.add(new CardSprite(this.game, (i * 73) + 20, 20, this.board.player1.getCard(i)));
    };

    this.player = this.game.add.group();

    for (var j = this.board.player2.cardCount() - 1; j >= 0; j--) {
        var card2 = new CardSprite(this.game, (j * 73) + 20, 480, this.board.player2.getCard(j));
        card2.inputEnabled = true;
        card2.events.onInputDown.add(cardClick, this);
        this.player.add(card2);
    };

    this.potCards = this.game.add.group();

    for (var k = this.board.pot.cardCount() - 1; k >= 0; k--){
        var y = k % 2 === 0 ? 195 : 305;
        var x = k % 2 === 0 ? ((k / 2) * 73) + 143 : (((k - 1) / 2) * 73) + 143;
        this.potCards.add(new CardSprite(this.game, x, y, this.board.pot.getCard(k)));
    }
};

play.prototype.update = function(){
    if (typeof this.selectedCard !== 'undefined'){
        this.selectedCard.tint = 0xff0000;
        for (var i = this.potCards.children.length - 1; i >= 0; i--) {
            if (this.potCards.children[i].getCard().getSuit() === this.selectedCard.getCard().getSuit()){
                this.potCards.children[i].tint = 0x00ff00;
            }
            else {
                this.potCards.children[i].tint = 0xffffff;
            }
        };
    }

};

function cardClick(card, pointer){
    if (typeof this.selectedCard !== 'undefined'){
        this.selectedCard.tint = 0xffffff;
    }

    this.selectedCard = card;
};
