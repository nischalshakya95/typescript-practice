import MazeRunner from './MazeRunner';


let mazeRunner = new MazeRunner(
   [[1,1,1,1,1,1,1],
    [1,0,0,0,0,0,3],
    [1,0,1,0,1,0,1],
    [0,0,1,0,0,0,1],
    [1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1],
    [1,2,1,0,1,0,1]], 2, 3, 0);


console.log();

test('mazerunner test', () => {
    expect(mazeRunner.for(["N","N","N","N","N","E","E","E","E","E"]).run()).toBe('Finish');
});