'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main(inputLines);
});

export default class Node {
    public data:number;
    public left:Node;
    public right:Node;
    
    constructor(data:number) {
        this.data = data;
    }
};

function readLine(): string {
    return inputLines[currentLine++];
}

function insert(root: Node, data: number): Node {
        if(root == null) {
            return new Node(data);
        } else {
            let cur:Node;
            if(data <= root.data) {
                cur = insert(root.left, data);
                root.left = cur;
            } else {
                cur = insert(root.right, data);
                root.right = cur;
            }
            return root;
        }
    }

function postOrder(root:Node): string {
    if(root == null) return '';
    return postOrder(root.left) + postOrder(root.right) + root.data + ' ';
    return root.data + (root.left != null ? ' ' : '') + postOrder(root.left) + (root.right != null ? ' ' : '') + postOrder(root.right);
}

function main(input: string[]) {
    // console.log(input);
    let [n, tree, end] = input;
    let root: Node = null;
    let array: number[] = tree.split(' ').map(el => parseInt(el));
    
    array.forEach(el => {
        root = insert(root, el);
    })
    
    console.log(postOrder(root));
}
