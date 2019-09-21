const fs = require('fs'); //core module

function readUsers(cb) {
    return fs.readFile('user.txt', {
        encoding: 'utf-8'
    }, cb);
}

module.exports = {
    readUsers
};