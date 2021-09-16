// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  // Parse N into binary
  let bin = N.toString(2)
    .split("")
    .map((e) => parseInt(e));
  console.log(bin);

  // while (bin.length > 1) {
  // let first = bin.shift();
  for (let d = 0; d < bin.length ; d++) {
    let next;
    let temp = bin[d + 1];

    switch (bin[d]) {
      case 0:
        if (bin[d + 1] == 0 && bin.includes(1, d + 1)) {
          next = bin.indexOf(1, d + 1);
          bin[d + 1] = bin[next];
          bin[next] = temp;
        }
        break;
      case 1:
        if (bin[d + 1] == 1 && bin.includes(0, d + 1)) {
          next = bin.indexOf(0, d + 1);
          bin[d + 1] = bin[next];
          bin[next] = temp;
        }
        break;
      default:
        break;
    }
  }

  return bin;
}

console.log(solution(321312));
