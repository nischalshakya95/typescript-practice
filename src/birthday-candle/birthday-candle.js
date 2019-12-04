"use strict";
exports.__esModule = true;
var BirthdayCandle = /** @class */ (function () {
    function BirthdayCandle() {
        this.findMax = function (n1, n2) { return n1 > n2 ? n1 : n2; };
    }
    BirthdayCandle.prototype.getNoOfCandleCanBeBlown = function (age, candles) {
        var _this = this;
        return candles.filter(function (c) {
            return c === _this.findMaxNumberFromArray(candles, candles.length);
        }).length;
    };
    BirthdayCandle.prototype.findMaxNumberFromArray = function (arr, n) {
        return n === 1 ? arr[0] : this.findMax(arr[n - 1], this.findMaxNumberFromArray(arr, n - 1));
    };
    return BirthdayCandle;
}());
exports.BirthdayCandle = BirthdayCandle;
console.log(new BirthdayCandle().getNoOfCandleCanBeBlown(10, [18, 90, 90, 13, 90, 75, 90, 8, 90, 43]));
