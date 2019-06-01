'use strict';

let LinkedList = require('./data-structures/linked-list');

let list = new LinkedList();
list.append('apple');
list.append('banana');
list.append('pear');
list.append('pineapple');

function traverse(ll) {
    let current = ll.head;
    while(current.next) {
        console.log(current.value);
        current = current.next;
    }
    console.log(current.value);
}
traverse(list);