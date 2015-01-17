(function(){

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    function preload(){
        game.load.image('background', 'koikoi/assets/sky.png');
        game.load.image('11-1', 'koikoi/assets/11-1.png');
    }

    function create(){
        game.add.sprite(0, 0, 'background');
        game.add.sprite(0, 0, '11-1');
    }

    function update(){

    }

})();
