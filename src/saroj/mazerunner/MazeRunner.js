"use strict";
exports.__esModule = true;
var MazeRunner = /** @class */ (function () {
    function MazeRunner(maze, startNumber, endNumber, runnable) {
        this.maze = maze;
        this.startNumber = startNumber;
        this.endNumber = endNumber;
        this.runnable = runnable;
    }
    MazeRunner.prototype.setStartPosition = function () {
        for (var i = 0; i < this.maze.length; i++) {
            for (var j = 0; j < this.maze.length; j++) {
                if (this.maze[i][j] == this.startNumber) {
                    this.position = { x: j, y: i };
                    return;
                }
            }
        }
        this.position = { x: -1, y: -1 };
    };
    MazeRunner.prototype.getStartPosition = function () {
        return this.position;
    };
    MazeRunner.prototype["for"] = function (directions) {
        this.directions = directions;
        return this; // for chaining;
    };
    MazeRunner.prototype.run = function () {
        if (!this.position)
            this.setStartPosition();
        console.log(this.position);
        for (var _i = 0, _a = this.directions; _i < _a.length; _i++) {
            var dir = _a[_i];
            switch (dir) {
                case 'N':
                    this.position.y -= 1;
                    break;
                case 'S':
                    this.position.y += 1;
                    break;
                case 'E':
                    this.position.x += 1;
                    break;
                case 'W':
                    this.position.x -= 1;
                    break;
            }
            if (this.maze[this.position.y][this.position.x] == this.endNumber)
                return 'Finish';
            else if (this.position.x < 0 || this.position.x >= this.maze.length || this.position.y < 0 || this.position.y >= this.maze.length || this.maze[this.position.y][this.position.x] != this.runnable)
                return 'Dead';
        }
        return 'Lost';
    };
    return MazeRunner;
}());
exports["default"] = MazeRunner;
