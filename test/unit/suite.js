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
        this.stack = new Stack(deck);
    });

    describe("deck", function(){
        it("has 48 cards", function(){
            expect(deck.length).toEqual(48);
        });
    });

    describe("stack", function(){
        it("should have same size as the deck", function(){
            expect(deck.length).toEqual(this.stack.size());
        });

        it("should contain all the cards of the deck", function(){
            expect(containsAll(this.stack, deck)).toBe(true);
        });

        it("should allow us to deal cards", function(){
            var hand = []
            for (var i = 0; i < 8; i++) {
                hand.push(this.stack.deal());
            };

            expect(hand.length).toEqual(8);
            // dealt cards should no longer be in the deck
            expect(containsAll(hand, this.stack)).not.toBe(true);
        });
    });

});
