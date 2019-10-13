// TODO: Require Controllers...
const cubeController = require('../controllers/cube');
const accessoryController = require('../controllers/accessory');
const authController = require('../controllers/auth');

module.exports = (app) => {
    app.get('/create/accessory', accessoryController.createGet);
    app.post('/create/accessory', accessoryController.createPost);
    app.get('/attach/accessory/:id', accessoryController.attachGet);
    app.post('/attach/accessory/:id', accessoryController.attachPost);
    app.get('/details/:id', cubeController.details)
    app.get('/about', cubeController.about);
    app.get('/login', authController.login);
    app.get('/register', authController.register);
    app.post('/login', authController.loginPost);
    app.post('/register', authController.registerPost);
    app.get('/not-found', cubeController.notFound);
    app.get('/create', cubeController.getCreate);
    app.post('/create', cubeController.postCreate);
    app.get('/', cubeController.index);
};