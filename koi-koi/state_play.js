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

}

    /*function preload(){
        var deck = new Cards.Deck().getNew();
        for (var i = deck.length - 1; i >= 0; i--) {
            game.load.image(deck[i].getId(), '/koi-koi/assets/set1/' + deck[i].getImage());
        };
    }*/

play.prototype.create = function(){
    this.stack = new Cards.Stack(Cards.deck);
    this.dealer = new Cards.Dealer(this.stack);
    this.board = new Board.Gameboard();
    this.board.player1.giveCards(this.dealer.deal());
    this.board.player2.giveCards(this.dealer.deal());
    this.board.pot.giveCards(this.dealer.deal());

    this.cpu = this.game.add.group();

    for (var i = this.board.player1.cardCount() - 1; i >= 0; i--) {
        var card = this.cpu.create((i * 73) + 20, 20, this.board.player1.getCard(i).getId());
    };

    this.player = this.game.add.group();

    for (var j = this.board.player2.cardCount() - 1; j >= 0; j--) {
        var card2 = this.player.create((j * 73) + 20, 480, this.board.player2.getCard(j).getId());
        card2.inputEnabled = true;
        //card2.events.onInputDown.add(cardClick, this);
        card2.input.enableDrag();
    };

    this.potCards = this.game.add.group();

    for (var k = this.board.pot.cardCount() - 1; k >= 0; k--){
        var y = k % 2 === 0 ? 195 : 305;
        var x = k % 2 === 0 ? ((k / 2) * 73) + 143 : (((k - 1) / 2) * 73) + 143;
        this.potCards.create(x, y, this.board.pot.getCard(k).getId());
    }
}
