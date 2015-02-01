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

    CardCollection.prototype.getCards = function(){
        return this.cards;
    }

    var Player = function(){};
    Player.prototype = new CardCollection();

    var Pot = function(){
        CardCollection.call(this);
        this.cardsSelected = [];
    };
    Pot.prototype = Object.create(CardCollection.prototype);
    Pot.prototype.constructor = Pot;
    Pot.prototype.addSelected = function(card){
        this.cardsSelected.push(card);
    }
    Pot.prototype.clearSelected = function(){
        this.cardsSelected = [];
    }


    var Gameboard = function(){
        this.player1 = new Player();
        this.player2 = new Player();
        this.pot = new Pot();
    };

    return {
        Gameboard: Gameboard,
    };

})();
