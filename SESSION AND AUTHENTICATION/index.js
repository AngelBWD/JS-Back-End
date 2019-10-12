const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded());

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('pages','login.html'));
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});


app.get('/', (req, res) => {
    res.send('Default page'); 
    //res.cookie('test_cookie', { test: 123 }).send('HELLO');
    //res.locals
});

app.listen(8080, () => {
    console.log('Server is listening on 8080');
});