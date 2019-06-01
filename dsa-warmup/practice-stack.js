'use strict';

let Stack = require('./data-structures/stack');

let stack = new Stack();
stack.push('potato');
stack.push('fries');
stack.push('mashed');
stack.push('vodka');

function print(stack) {
  while(stack.peek()) { 
    console.log(stack.pop());
  }
}
print(stack);