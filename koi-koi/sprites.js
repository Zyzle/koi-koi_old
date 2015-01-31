var CardSprite = function(game, x, y, card){
    Phaser.Sprite.call(this, game, x, y, card.getId());
    this.card = card;
};

CardSprite.prototype = Object.create(Phaser.Sprite.prototype);
CardSprite.prototype.constructor = CardSprite;
CardSprite.prototype.getCard = function(){
    return this.card;
};
