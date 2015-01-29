(function(){
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

    game.state.add("boot", boot);
    game.state.add("preload", preload);
    //game.state.add("title_screen", titleScreen);
    game.state.add("play", play);
    //game.state.add("game_over", gameOver);
    game.state.start("boot");


})();
