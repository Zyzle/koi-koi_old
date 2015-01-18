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
        this.stack = new Cards.Stack(Cards.deck);
    });

    describe("deck", function(){
        it("has 48 cards", function(){
            expect(Cards.deck.length).toEqual(48);
        });
    });

    describe("stack", function(){
        it("should have same size as the deck", function(){
            expect(Cards.deck.length).toEqual(this.stack.size());
        });

        it("should contain all the cards of the deck", function(){
            expect(containsAll(this.stack, Cards.deck)).toBe(true);
        });

        describe("deal", function(){
            beforeEach(function(){
                this.hand = []
                for (var i = 0; i < 8; i++) {
                    this.hand.push(this.stack.take());
                };
            });

            it("should allow us to deal cards", function(){
                expect(this.hand.length).toEqual(8);
            });

            it("dealt cards should no longer be in the deck", function(){
                expect(containsAll(this.hand, this.stack)).not.toBe(true);
            });

        });

    });

});
