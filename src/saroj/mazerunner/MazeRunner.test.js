"use strict";
exports.__esModule = true;
var MazeRunner_1 = require("./MazeRunner");
var mazeRunner = new MazeRunner_1["default"]([[1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1]], 2, 3, 0);
console.log(mazeRunner["for"](["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"]).run());
