class EventEmiter {
    construktor() {
        this.subscriptions = {};
    }

    on(eventName, cb) {
        this.on[eventName] = (this.on[eventName] || []).concat(cb);

        const cbIndex = this.on[eventName].length-1;
        return () => {
            this.on[eventName] = [
                ...this.on[eventName].slice(0, cbIndex),
                ...this.on[eventName].slice(cbIndex + 1)
            ];
        }

    }
    once(eventName, cb) {
        const unsub = this.on(eventName, data => {
            cb(data);
            unsub();
        })
    }
    emit(eventName, data) {
        (this.on[eventName] || []).forEach(cb => {
            cb(data);
        });
    }
}

const emitter = new EventEmiter();
// const unsub = emitter.on('getData', console.log);
// emitter.on('getData', console.log);
// emitter.on('getData', console.log);

 
emitter.emit('getData', 'Testing...');
// unsub();
// console.log('-------------------');
emitter.once('getData', console.log);
emitter.emit('getData', 'Testing...');