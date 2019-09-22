class EventEmiter {
    construktor() {
        this.subscriptions = {};
    }

    subscriptions(eventName, cb) {
        this.subscriptions[eventName] = (this.subscriptions[eventName] || []).concat(cb);
    }

    emit(eventName, data) {
        (this.subscriptions[eventName] || []).forEach(cb => {
            cb(data);
        });
    }
}

const emitter = new EventEmiter();
emitter.subscriptions('getData', console.log);
emitter.subscriptions('getData', console.log);
emitter.subscriptions('getData', console.log);

emitter.emit('getData', 'Testing...');