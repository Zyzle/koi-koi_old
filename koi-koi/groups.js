var CardGroup = function(game, cardCollection){
    Phaser.Group.call(this, game);

    this.cardCollection = cardCollection
};

CardGroup.prototype = Object.create(Phaser.Group.prototype);
CardGroup.prototype.constructor = CardGroup;


var PotGroup = function(game, cardCollection){
    CardGroup.call(this, game, cardCollection);

    for (var k = this.cardCollection.length - 1; k >= 0; k--){
        var y = k % 2 === 0 ? 195 : 305;
        var x = k % 2 === 0 ? ((k / 2) * 73) + 143 : (((k - 1) / 2) * 73) + 143;
        this.add(new CardSprite(this.game, x, y, this.cardCollection[k]));
    }
};

PotGroup.prototype = Object.create(CardGroup.prototype);
PotGroup.prototype.constructor = PotGroup;

var CpuGroup = function(game, cardCollection){
    CardGroup.call(this, game, cardCollection);

    for (var i = this.cardCollection.length - 1; i >= 0; i--) {
        this.add(new HiddenCardSprite(this.game, (i * 73) + 20, 20, this.cardCollection[i]));
    };
};

CpuGroup.prototype = Object.create(CardGroup.prototype);
CpuGroup.prototype.constructor = CpuGroup;


var PlayerGroup = function(game, cardCollection){
    CardGroup.call(this, game, cardCollection);

    for (var j = this.cardCollection.length - 1; j >= 0; j--) {
        var card2 = new CardSprite(this.game, (j * 73) + 20, 480, this.cardCollection[j]);

        card2.inputEnabled = true;
        this.add(card2);
    };
};

PlayerGroup.prototype = Object.create(CardGroup.prototype);
PlayerGroup.prototype.constructor = PlayerGroup;
