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
                this.hand = [];
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

    beforeEach(function(){
        this.deck = new Cards.Deck();
    });

    it("Can create match results", function(){
        var mr = new Yaku.MatchResult(1, 5);
        expect(mr).toBeDefined();
    });

    it("should match 5 Brights (goko)", function(){
        var hand = [this.deck.getSpecific("1-4"), this.deck.getSpecific("3-4"),
            this.deck.getSpecific("8-4"), this.deck.getSpecific("11-4"),
            this.deck.getSpecific("12-4")];

        var matcher = new Yaku.YakuMatcher(hand);
        var result = matcher.getGoko();
        expect(result.getMatch()).toBe(Yaku.MatchType.MATCH);
        expect(result.getPoints()).toBe(10);
    });

    describe("dry 3 bright (sanko)", function(){
        beforeEach(function(){
            this.hand = [this.deck.getSpecific("1-4"), this.deck.getSpecific("3-4"),
            this.deck.getSpecific("8-4")];
            this.matcher = new Yaku.YakuMatcher(this.hand);
        });

        it("should match", function(){
            var result = this.matcher.getSanko();
            expect(result.getMatch()).toBe(Yaku.MatchType.MATCH);
            expect(result.getPoints()).toBe(5);
        });

        it("should partial match goko", function(){
            var result = this.matcher.getGoko();
            expect(result.getMatch()).toBe(0);
        });

        it("should partial match shiko", function(){
            var result = this.matcher.getShiko();
            expect(result.getMatch()).toBe(0);
        });
    });

    describe("dry 4 bright (shiko)", function(){
        beforeEach(function(){
            this.hand = [this.deck.getSpecific("1-4"), this.deck.getSpecific("3-4"),
            this.deck.getSpecific("8-4"), this.deck.getSpecific("12-4")];
            this.matcher = new Yaku.YakuMatcher(this.hand);
        });

        it("should match", function(){
            var result = this.matcher.getShiko();
            expect(result.getMatch()).toBe(Yaku.MatchType.MATCH);
            expect(result.getPoints()).toBe(8);
        });

        it("should partial match goko", function(){
            var result = this.matcher.getGoko();
            expect(result.getMatch()).toBe(Yaku.MatchType.PARTIAL);
        });

        it("should not match dry 3 bright", function(){
            var result = this.matcher.getSanko();
            expect(result.getMatch()).toBe(Yaku.MatchType.PARTIAL);
        });
    });

    describe("rain man (ameshiko)", function(){
        beforeEach(function(){
            this.hand = [this.deck.getSpecific("11-4"), this.deck.getSpecific("3-4"),
            this.deck.getSpecific("8-4"), this.deck.getSpecific("12-4")];
            this.matcher = new Yaku.YakuMatcher(this.hand);
        });

        it("should match", function(){
            var result = this.matcher.getAmeshiko();
            expect(result.getMatch()).toBe(Yaku.MatchType.MATCH);
            expect(result.getPoints()).toBe(7);
        });

        it("should partial match goko", function(){
            var result = this.matcher.getGoko();
            expect(result.getMatch()).toBe(Yaku.MatchType.PARTIAL);
        });

        it("should not match dry 4 bright", function(){
            var result = this.matcher.getShiko();
            expect(result.getMatch()).toBe(Yaku.MatchType.PARTIAL);
        });

        it("should not match dry 3 bright", function(){
            var result = this.matcher.getSanko();
            expect(result.getMatch()).toBe(Yaku.MatchType.PARTIAL);
        });
    });

    describe("inoshikacho", function(){
        beforeEach(function(){
            this.hand = [this.deck.getSpecific("6-4"), this.deck.getSpecific("7-4"), this.deck.getSpecific("10-4")];
            this.matcher = new Yaku.YakuMatcher(this.hand);
        });

        it("should match", function(){
            var result = this.matcher.getInoshikacho();
            expect(result.getMatch()).toBe(Yaku.MatchType.MATCH);
            expect(result.getPoints()).toBe(5);
        });

        it("should partial match tane", function(){
            var result = this.matcher.getTane();
            expect(result.getMatch()).toBe(Yaku.MatchType.PARTIAL);
        });
    });

    describe("tane", function(){
        beforeEach(function(){
            this.hand = [this.deck.getSpecific("2-4"), this.deck.getSpecific("5-4"), this.deck.getSpecific("6-4"), this.deck.getSpecific("7-4"), this.deck.getSpecific("10-4")];
            this.matcher = new Yaku.YakuMatcher(this.hand);
        });

        it("should match", function(){
            var result = this.matcher.getTane();
            expect(result.getMatch()).toBe(Yaku.MatchType.MATCH);
            expect(result.getPoints()).toBe(1);
        });

        it("should also match inoshikacho", function(){
            var result = this.matcher.getInoshikacho();
            expect(result.getMatch()).toBe(Yaku.MatchType.MATCH);
            expect(result.getPoints()).toBe(5);
        });
    });

    describe("akatan", function(){
        beforeEach(function(){
            this.hand = [this.deck.getSpecific("1-3"), this.deck.getSpecific("2-3"), this.deck.getSpecific("3-3")];
            this.matcher = new Yaku.YakuMatcher(this.hand);
        });

        it("should match", function(){
            var result = this.matcher.getAkatan();
            expect(result.getMatch()).toBe(Yaku.MatchType.MATCH);
            expect(result.getPoints()).toBe(5);
        });
    });

    describe("aotan", function(){
        beforeEach(function(){
            this.hand = [this.deck.getSpecific("6-3"), this.deck.getSpecific("9-3"), this.deck.getSpecific("10-3")];
            this.matcher = new Yaku.YakuMatcher(this.hand);
        });

        it("should match", function(){
            var result = this.matcher.getAotan();
            expect(result.getMatch()).toBe(Yaku.MatchType.MATCH);
            expect(result.getPoints()).toBe(5);
        });
    });

    describe("akatan, aotan no chofuku", function(){
        beforeEach(function(){
            this.hand = [this.deck.getSpecific("6-3"), this.deck.getSpecific("9-3"), this.deck.getSpecific("10-3"), this.deck.getSpecific("1-3"), this.deck.getSpecific("2-3"), this.deck.getSpecific("3-3")];
            this.matcher = new Yaku.YakuMatcher(this.hand);
        });

        it("should match", function(){
            var result = this.matcher.getAkatanAotan();
            expect(result.getMatch()).toBe(Yaku.MatchType.MATCH);
            expect(result.getPoints()).toBe(10);

        });

        it("should not match akatan or aotan individually", function(){
            var result1 = this.matcher.getAkatan();
            var result2 = this.matcher.getAotan();
            expect(result1.getMatch()).toBe(Yaku.MatchType.PARTIAL);
            expect(result2.getMatch()).toBe(Yaku.MatchType.PARTIAL);
        });
    });

    describe("tanzaku", function(){
        beforeEach(function(){
            this.hand = [this.deck.getSpecific("6-3"), this.deck.getSpecific("9-3"), this.deck.getSpecific("10-3"), this.deck.getSpecific("1-3"), this.deck.getSpecific("2-3"), this.deck.getSpecific("4-3")];
            this.matcher = new Yaku.YakuMatcher(this.hand);
        });

        it("should match", function(){
            var result = this.matcher.getTanzaku();
            expect(result.getMatch()).toBe(Yaku.MatchType.MATCH);
            // we're matching 6 cards here so score should be tanzaku base + 1
            expect(result.getPoints()).toBe(2);
        });

        it("should also match aotan", function(){
            var result = this.matcher.getAotan();
            expect(result.getMatch()).toBe(Yaku.MatchType.MATCH);
            expect(result.getPoints()).toBe(8);
        });

        it("should also partial match akatan", function(){
            var result = this.matcher.getAkatan();
            expect(result.getMatch()).toBe(Yaku.MatchType.PARTIAL);
        });
    });

    describe("kasu", function(){
        beforeEach(function(){
            this.hand = [this.deck.getSpecific("1-1"),
            this.deck.getSpecific("1-2"),
            this.deck.getSpecific("2-2"),
            this.deck.getSpecific("11-1"),
            this.deck.getSpecific("12-1"),
            this.deck.getSpecific("12-3"),
            this.deck.getSpecific("10-2"),
            this.deck.getSpecific("8-1"),
            this.deck.getSpecific("5-1"),
            this.deck.getSpecific("3-1"),
            this.deck.getSpecific("5-2"),
            this.deck.getSpecific("3-2"),
            ];

            this.matcher = new Yaku.YakuMatcher(this.hand);
        });

        it("should match", function(){
            var result = this.matcher.getKasu();
            console.log(result);
            expect(result.getMatch()).toBe(Yaku.MatchType.MATCH);
            expect(result.getPoints()).toBe(3);
        });
    });

    describe("tzukimi-zake", function(){
        beforeEach(function(){
            this.hand = [this.deck.getSpecific("9-4"), this.deck.getSpecific("8-4") ];

            this.matcher = new Yaku.YakuMatcher(this.hand);
        });

        it("should match", function(){
            var result = this.matcher.getTsukimizake();
            expect(result.getMatch()).toBe(Yaku.MatchType.MATCH);
            expect(result.getPoints()).toBe(5);
        });
    });

    describe("hanami-zake", function(){
        beforeEach(function(){
            this.hand = [this.deck.getSpecific("9-4"), this.deck.getSpecific("3-4") ];

            this.matcher = new Yaku.YakuMatcher(this.hand);
        });

        it("should match", function(){
            var result = this.matcher.getHanamizake();
            expect(result.getMatch()).toBe(Yaku.MatchType.MATCH);
            expect(result.getPoints()).toBe(5);
        });
    });
});
