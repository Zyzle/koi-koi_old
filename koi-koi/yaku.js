"use strict";
var Yaku = (function(){

    /**
     * match object, -1 (no match), 0 (partial match), 1 (complete match)
     */
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

    YakuMatcher.prototype.getMatch5Bright = function(){
        return match5Bright(this.hand);
    }

    YakuMatcher.prototype.getMatchDry3Bright = function(){
        return matchDry3Bright(this.hand);
    }

    YakuMatcher.prototype.getMatchDry4Bright = function(){
        return matchDry4Bright(this.hand);
    }

    /*YakuMatcher.prototype.getResultSet = function(){
        var ret =  {
            match5Brights(this.hand),
        };

        return ret;
    };*/

    function matchCount(hand, set){
        var count = 0;
        for (var i = hand.length - 1; i >= 0; i--) {
            if(set.indexOf(hand[i].getId()) !== -1){
                count++;
            }
        }
        return count;
    };

    var match5Bright = function(hand){
        var set = ["1-4", "3-4", "8-4", "11-4", "12-4"];
        var res = matchCount(hand, set);

        if (res === set.length){
            return new MatchResult(1, 10);
        }
        else if (res > 0){
            return new MatchResult(0, 10);
        }
        else {
            return new MatchResult(-1, 10);
        }
    };

    var matchDry3Bright = function(hand){
        var set = ["1-4", "3-4", "8-4", "12-4"];
        var res = matchCount(hand, set);

        if (res > 3){
            return new MatchResult(-1, 5);
        }
        else if (res === 3){
            return new MatchResult(1, 5);
        }
        else if (res > 0){
            return new MatchResult(0, 5);
        }
        else {
            return new MatchResult(-1, 5);
        }
    };

    var matchDry4Bright = function(hand){
        var set = ["1-4", "3-4", "8-4", "12-4"];
        var res = matchCount(hand, set);

        if (res === 4){
            return new MatchResult(1, 8);
        }
        else if (res > 0){
            return new MatchResult(0, 8);
        }
        else {
            return new MatchResult(-1, 8);
        }
    };

    return {
        MatchResult: MatchResult,
        YakuMatcher: YakuMatcher
    };

})();
