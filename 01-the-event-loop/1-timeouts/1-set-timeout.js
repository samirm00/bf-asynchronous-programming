// setTimeout takes two arguments:
//  callback: the task to schedule (function)
//  delay: how long to wait before executing the callback (in milliseconds)

// in "callbacks.js"e, the callbacks were executed synchronously on the callstack
//  setTimeout sends your callback around the event loop
//  in other words, it executes your callback asynchronously

setTimeout(() => {
    console.log('hello from timeout 1');
}, 3 * 1000);

console.log('scheduled timeout 1');

setTimeout(() => {
    console.log('bonjour from timeout 2');
}, 2 * 1000);

console.log('scheduled timeout 2');

console.log('= =  the call stack is empty  = =');
