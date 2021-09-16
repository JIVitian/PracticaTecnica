// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    // Parse A*B to binary
    let bin = (A*B).toString(2).split('').map(bit => parseInt(bit));
    
    // return the sum of all bits
    return bin.reduce((ones, bit) => ones + bit);
}


console.log(solution(1,0));