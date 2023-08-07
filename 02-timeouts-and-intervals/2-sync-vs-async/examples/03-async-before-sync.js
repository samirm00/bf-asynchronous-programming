import { labeledLogger } from '../../../lib/labeled-logger.js';
import { synchronousTimeout } from '../../../lib/synchronous-timeout.js';

const { log } = labeledLogger();

/* Async before Sync

  what happens if we call the setTimeouts before the synchronousTimeouts?

*/

const callback1 = () => {
    log('+ execute async  1000 ms');
};
log('+ schedule async 1000 ms'); //1 
setTimeout(callback1, 1000);

const callback2 = () => {
    log('+ execute async  500 ms');
};
log('+ schedule async 500 ms'); // 2 
setTimeout(callback2, 500);

const callback3 = () => {
    log('+ execute async  0 ms');
};
log('+ schedule async 0 ms'); // 3
setTimeout(callback3, 0);

const callback4 = () => {
    log('- end synchronous 1000 ms');
};
log('- begin synchronous 1000 ms'); // 4
synchronousTimeout(callback4, 1000); // 5

const callback5 = () => {
    log('- end synchronous 500 ms');
};
log('- begin synchronous 500 ms'); // 6
synchronousTimeout(callback5, 500); // 7

const callback6 = () => {
    log('- end synchronous 0 ms');
};
log('- begin synchronous 0 ms'); // 8
synchronousTimeout(callback6, 0); // 9 

log('= = = =  the call stack is empty  = = = ='); // 10
