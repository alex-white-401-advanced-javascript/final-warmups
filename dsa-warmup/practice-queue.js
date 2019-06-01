'use strict';

let Queue = require('./data-structures/queue');

let que = new Queue();
q.enqueue('apple');
q.enqueue('banana');
q.enqueue('orange');
q.enqueue('kiwi');

function traverse(queue) {
    let fruit = null;
    while( fruit = queue.dequeue()){
        console.log(fruit);
    }
}
traverse(que);