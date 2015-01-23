"use strict";
var Board = (function(){

    var CardCollection = function(){
        this.cards = [];
    };

    CardCollection.prototype.cardCount = function(){
        return this.cards.length;
    };

    CardCollection.prototype.giveCards = function(cards){
        this.cards = this.cards.concat(cards);
    };

    CardCollection.prototype.getCard = function(index){
        return this.cards[index];
    };

    var Player = function(){};
    Player.prototype = new CardCollection();

    var Pot = function(){};
    Pot.prototype = new CardCollection();

    var Gameboard = function(){
        this.player1 = new Player();
        this.player2 = new Player();
        this.pot = new Pot();
    };

    return {
        Gameboard: Gameboard,
    };

})();
