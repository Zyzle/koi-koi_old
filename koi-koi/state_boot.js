var boot = function(game){};

boot.prototype.preload = function(){
    this.game.load.image('lb', 'assets/loading.png');
};

boot.prototype.create = function(){
    this.game.state.start("preload");
};
