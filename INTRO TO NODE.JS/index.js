const fileManager = require('./file-manager'); //local module
const _ = require('lodash') // Third-party module

//CPS  (Continuation Passing Style)
fileManager.readUsers(function (err, content) {
    if (err) { console.error(err); return;
    }
    const userArray = content.split(',');
   console.log(_.chunk(userArray,2));
});
console.log('Hello World!');
