// module2.js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Listen for the event
myEmitter.on('myEvent', (data) => {
  console.log('Received the event:', data);
});
