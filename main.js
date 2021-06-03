'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest
let stacks = {
  a: [4,3,2,1],
  b: [],
  c: []
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
const movePiece = (startStack, endStack) => {
  // Your code here
  stacks[endStack].push(stacks[startStack].pop())

}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {
  // Move is legal if last element of startStack array is smaller than last element of endStack array
  let startingStack = stacks[startStack]
  let endingStack = stacks[endStack]

  let lastStartStackElement = startingStack[startingStack.length -1]
  let lastEndStackElement = endingStack[endingStack.length -1]


  if(lastStartStackElement < lastEndStackElement || lastEndStackElement === undefined){
    return true;
  }
  return false;
}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Iterate over stacks.b and compare each element to the same element indexed in the array [4,3,2,1]
  
  if (stacks.b.length === 4){
    return true;
  }else{
    return false;
  }
};


// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Take input and test isLegal
  // If legal then move from startStack to endStack
  // if(isLegal(startStack, endStack)){
  if(isLegal(startStack, endStack)){
    movePiece(startStack, endStack)
  } else {
    console.log('NOPE GO HOME')
  }
  // }
  // call check for win


}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
