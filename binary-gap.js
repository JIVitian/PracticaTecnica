// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    // Default value for max gap
    let longs = [0];
    // Parse N into binary
    let bin = N.toString(2).split('').map(e => parseInt(e));

    while (bin.length > 1 && bin.includes(1)) {
        bin = bin.slice(bin.indexOf(1) + 1);
        longs.push(bin.indexOf(1));
    }

    return Math.max(...longs);
}
