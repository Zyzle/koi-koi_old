"use strict";
var Yaku = (function(){

    var MatchResult = function(match, points){
        this.match = match;
        this.points = points;
    };

    MatchResult.prototype.isMatch = function(){
        return this.match;
    }

    return {
        MatchResult: MatchResult,
    };

})();
