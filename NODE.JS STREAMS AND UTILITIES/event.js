const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('someEvents', console.log);


setTimeout(() => {
    emitter.emit('someEvents','Hello!') 
}, 5000);
