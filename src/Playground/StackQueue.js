class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// console.log(new Node(6));

// Pointer based implementation.
class Stack {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.count = 0;
  }

  push(iValue) {
    if (this.head === undefined) {
      this.head = new Node(iValue);
      this.tail = this.head;
    } else {
      const node = new Node(iValue);
      node.next = this.head;
      this.head = node;
    }
    this.count++;
  }

  pop() {
    if (this.head === undefined) {
      return false;
    }
    const node = this.head;
    this.head = node.next;
    node.next = null;
    this.count--;
    return node;
  }

  size() {
    return this.count;
  }
}

let input = [1, 2, 3];
let myStack = new Stack();
input.forEach((num, i) => {
  myStack.push(num);
});

console.log(myStack);

// We will write a testcase with double insert
// into an stack and checking it with original array

const SIZE = 10;
const MAX_NUM = 10;
const TEST_ARRAY = [];
const TEST_STACK1 = new Stack();
const TEST_STACK2 = new Stack();
for (let i = 0; i < SIZE; i++) {
  const element = Math.floor(Math.random() * MAX_NUM);
  TEST_ARRAY.push(element);
}
//TEST_STACK2.push(1);
// 1st insertion
TEST_ARRAY.forEach((num) => TEST_STACK1.push(num));
while (TEST_STACK1.size() > 0) {
  const value = TEST_STACK1.pop().value;
  TEST_STACK2.push(value);
}
console.log(TEST_STACK2);
for (let i = 0; i < SIZE; i++) {
  if (!TEST_ARRAY[i] === TEST_STACK2.pop()) {
    console.log("Does not Match");
  }
}

console.log("END");