"use strict";
var Yaku = (function(){

    var MatchResult = function(match, points){
        this.match = match;
        this.points = points;
    };

    MatchResult.prototype.isMatch = function(){
        return this.match;
    };

    MatchResult.prototype.getPoints = function(){
        return this.points;
    };


    var YakuMatcher = function(hand){
        this.hand = hand;
    };

    YakuMatcher.prototype.getResultSet = function(){
        var ret =  {
            //match5Bright(this.hand),
        }

        return ret;
    };

    function matchCount(hand, set){
        var count = 0;
        for (var i = hand.length - 1; i >= 0; i--) {
            if(set.indexOf(hand[i]) !== -1){
                count++;
            }
        }
        return count;
    };

    var match5Brights = function(hand){
        var set = ["1-4", "3-4", "8-4", "11-4", "12-4"];
        var res = matchCount(hand, set);

        return new MatchResult()
    };

    return {
        MatchResult: MatchResult,
        YakuMatcher: YakuMatcher
    };

})();
