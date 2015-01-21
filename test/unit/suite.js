function containsAll(array1, array2){
    for (var i = array1.length - 1; i >= 0; i--) {
        if(array2.indexOf(array1[i]) === -1){
            return false;
        }
    }
    return true;
}

describe("Cards", function(){

    beforeEach(function(){
        this.stack = new Cards.Stack(new Cards.Deck().getNew());
    });

    describe("deck", function(){
        it("has 48 cards", function(){
            expect(new Cards.Deck().length()).toEqual(48);
        });
    });

    describe("stack", function(){
        it("should have same size as the deck", function(){
            expect(new Cards.Deck().length()).toEqual(this.stack.size());
        });

        it("should contain all the cards of the deck", function(){
            expect(containsAll(this.stack, new Cards.Deck().getNew())).toBe(true);
        });

        describe("take", function(){
            beforeEach(function(){
                this.hand = []
                for (var i = 0; i < 8; i++) {
                    this.hand.push(this.stack.take());
                };
            });

            it("should allow us to take cards", function(){
                expect(this.hand.length).toEqual(8);
            });

            it("taken cards should no longer be in the deck", function(){
                expect(containsAll(this.hand, this.stack)).not.toBe(true);
            });

        });

    });

    describe("dealer", function(){

        beforeEach(function(){
            this.dealer = new Cards.Dealer(this.stack);
        });

        it("should deal hands of 8 cards from the stack", function(){
            var hand = this.dealer.deal();
            expect(hand.length).toEqual(8);
        });

        it("dealt cards should no longer be in the stack", function(){
            var hand = this.dealer.deal();
            expect(containsAll(hand, this.stack)).not.toBe(true);
        });

    });

});

describe("Board", function(){

    beforeEach(function(){
        this.stack = new Cards.Stack(new Cards.Deck().getNew());
        this.dealer = new Cards.Dealer(this.stack);
        this.board = new Board.Gameboard();
    });

    it("should have two players and a pot", function(){
        expect(this.board.player1).toBeDefined();
        expect(this.board.player2).toBeDefined();
        expect(this.board.pot).toBeDefined();
    });

    it("should start with players and pt empty", function(){
        expect(this.board.player1.cardCount()).toBe(0);
        expect(this.board.player2.cardCount()).toBe(0);
        expect(this.board.pot.cardCount()).toBe(0);
    });

    it("should allow players and pot to be dealt cards", function(){
        this.board.player1.giveCards(this.dealer.deal());
        expect(this.board.player1.cardCount()).toBe(8);
        this.board.player2.giveCards(this.dealer.deal());
        expect(this.board.player2.cardCount()).toBe(8);
        this.board.pot.giveCards(this.dealer.deal());
        expect(this.board.pot.cardCount()).toBe(8);
    });

});

describe ("Yaku", function(){
    it("Can create match results", function(){
        var mr = new Yaku.MatchResult(1, 5);
        expect(mr).toBeDefined();
    });
});
