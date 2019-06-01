'use strict';

class Node {
  constructor(value, next=null, left=null, right =null) {
      this.value = value;
      this.next = next;
      this.left = left;
      this.right = right;
  }
}

module.exports = Node;