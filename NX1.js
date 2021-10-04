// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let aux = [...A];
    let sol = [];
    let it = 0;
    let bef = A[0], aft;

    for (let i = 0; i < aux.length; i++) {
        aft = aux[i + 1] ? aux[i + 1] : aux[i];
        if (aux[i] == bef && aux[i] == aft) {
            aux[i] = aux[i] == 0 ? 1 : 0;
            it++;
        }
        bef = aux[i];
    }

    sol.push(it);
    it = 0;
    aux = [...A];

    for (let i = 1; i < aux.length; i++) {
        if (aux[i] == aux[i - 1]) {
            aux[i] = aux[i] == 0 ? 1 : 0;
            it++;
        }
    }

    sol.push(it);

    return Math.min(...sol);
}

console.log(solution([1,0,1,0,1,1])); // 1
console.log(solution([1,1,0,1,1])); // 2
console.log(solution([0,1,0])); // 0
console.log(solution([0,1,1,0])); // 2