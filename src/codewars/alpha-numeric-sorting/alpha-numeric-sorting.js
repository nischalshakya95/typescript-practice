"use strict";
exports.__esModule = true;
var AlphaNumericSorting = /** @class */ (function () {
    function AlphaNumericSorting() {
    }
    AlphaNumericSorting.prototype.sort = function (words) {
        return words.split(' ')
            .sort(function (a, b) {
            return +a.match(/\d+/g)[0] - +b.match(/\d+/g)[0];
        })
            .join(' ');
    };
    return AlphaNumericSorting;
}());
exports.AlphaNumericSorting = AlphaNumericSorting;
var alphaNumericSorting = new AlphaNumericSorting();
console.log(alphaNumericSorting.sort('is21 Thi1s T4est 3a'));
