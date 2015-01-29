"use strict";
var preload = function(game){}

preload.prototype.preload = function(){
    var loadingBar = this.game.add.sprite(400, 300, 'lb');
    loadingBar.anchor.setTo(0.5, 0.5);
    this.game.load.setPreloadSprite(loadingBar);

    this.game.load.image("background1", '/assets/background1.jpg');
    var deck = new Cards.Deck().getNew();
    for (var i = deck.length - 1; i >= 0; i--) {
        this.game.load.image(deck[i].getId(), '/assets/set1/' + deck[i].getImage());
    };
};

preload.prototype.create = function(){
    this.game.state.start("play");
};
