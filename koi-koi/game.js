(function(){
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    var stack;
    var dealer;
    var gameBoard;
    var cpu;
    var player2Cards;
    var potCards;

    function preload(){
        for (var i = Cards.deck.length - 1; i >= 0; i--) {
            game.load.image(Cards.deck[i].getId(), '/koi-koi/assets/set1/' + Cards.deck[i].getImage());
        };
    }

    function create(){
        this.stack = new Cards.Stack(Cards.deck);
        this.dealer = new Cards.Dealer(this.stack);
        this.board = new Board.Gameboard();
        this.board.player1.giveCards(this.dealer.deal());
        this.board.player2.giveCards(this.dealer.deal());
        this.board.pot.giveCards(this.dealer.deal());

        this.cpu = game.add.group();

        for (var i = this.board.player1.cardCount() - 1; i >= 0; i--) {
            var card = this.cpu.create((i * 73) + 20, 20, this.board.player1.getCard(i).getId());
        };

        this.player2Cards = game.add.group();

        for (var j = this.board.player2.cardCount() - 1; j >= 0; j--) {
            var card2 = this.player2Cards.create((j * 73) + 20, 480, this.board.player2.getCard(j).getId());
            card2.inputEnabled = true;
            card2.events.onInputDown.add(cardClick, this);
        };

        this.potCards = game.add.group();

        for (var k = this.board.pot.cardCount() - 1; k >= 0; k--){
            var y = k % 2 === 0 ? 195 : 305;
            var x = k % 2 === 0 ? ((k / 2) * 73) + 143 : (((k - 1) / 2) * 73) + 143;
            this.potCards.create(x, y, this.board.pot.getCard(k).getId());
        }
    }

    function update(){

    }

    function cardClick(card){
        console.log(card.key);
    }

})();
