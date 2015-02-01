var CardSprite = function(game, x, y, card){
    Phaser.Sprite.call(this, game, x, y, card.getId());
    this.card = card;
};

CardSprite.prototype = Object.create(Phaser.Sprite.prototype);
CardSprite.prototype.constructor = CardSprite;
CardSprite.prototype.getCard = function(){
    return this.card;
};

var HiddenCardSprite = function(game, x, y, card){
    Phaser.Sprite.call(this, game, x, y, 'cardback');
    this.card = card;
};

HiddenCardSprite.prototype = Object.create(CardSprite.prototype);
HiddenCardSprite.prototype.constructor = HiddenCardSprite;
