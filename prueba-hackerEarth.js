// Así si funciona.

// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    // process.stdout.write(input.split('\n'));       // Writing output to STDOUT
    [n, line] = input.split('\n');
    // console.log(typeof line)
    console.log(isDivisible(line));    
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
// Write your code here

function isDivisible(line) {
    if(line.includes('HH')) return 'NO';
    
    return 'YES' + '\n' + line.replaceAll('.', 'B');
}