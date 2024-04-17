// module1.js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Raise an event
myEmitter.emit('myEvent', 'Hello, this is a custom event!');
