const env = process.env.NODE_ENV || 'development';
global.__basedir = __dirname;

const cubeModel = require('./models/cube')

cubeModel.insert({name: 'test1',desc: 'test1'}).then(insertedCube => {
    console.log(insertedCube);
    return cubeModel.delete(insertedCube.id)
}).then((deletedCube) => {
    console.log('deleted cube', deletedCube);
    console.log('lastIndex shoud be 1 and we shoud not have any cubes');
});
// const config = require('./config/config')[env];
// const app = require('express')();

// require('./config/express')(app);
// require('./config/routes')(app);

// app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));