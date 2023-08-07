// setting the delay to 0 ms does not make the code execute synchronously
//  it says to wait 0 ms before moving the task to the task queue
//  the task will be executed after the event loop is clear

console.log('scheduling timeout 1');

setTimeout(() => {
    console.log('executing callback 1');
}, 0);

console.log('scheduling timeout 2');
setTimeout(() => {
    console.log('executing callback 2');
}, 0);

console.log('= =  the call stack is empty  = =');
