import Position from './Position';

export default class MazeRunner {

    private maze: number[][];
    private directions: string[];
    private position: Position;
    private startNumber: number;
    private endNumber: number;
    private runnable: number;

    constructor(maze: number[][], startNumber: number, endNumber: number, runnable: number) {
        this.maze = maze;
        this.startNumber = startNumber;
        this.endNumber = endNumber;
        this.runnable = runnable;
    }

    setStartPosition(): void {
        for (let i = 0; i < this.maze.length; i++) {
            for (let j = 0; j < this.maze.length; j++) {
                if (this.maze[i][j] == this.startNumber) {
                    this.position = { x: j, y: i };
                    return;
                }
            }
        }
        this.position = { x: -1, y: -1 }
    }

    getStartPosition(): Position {
        return this.position;
    }

    for(directions: string[]): MazeRunner {
        this.directions = directions;
        return this; // for chaining;
    }

    run(): string {
        if (!this.position) this.setStartPosition();
        for (let dir of this.directions) {
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
            if (this.maze[this.position.y][this.position.x] == this.endNumber) return 'Finish'
            else if (this.position.x < 0 || this.position.x >= this.maze.length ||
                this.position.y < 0 || this.position.y >= this.maze.length ||
                this.maze[this.position.y][this.position.x] != this.runnable)
                return 'Dead'
        }
        return 'Lost';
    }
}