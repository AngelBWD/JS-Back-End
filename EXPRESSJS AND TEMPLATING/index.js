const express = require('express');
const port = 8080;
const api = require('./api');

const app = express();

app.use(express.static(__dirname + '/public'));

function defaultHandler(req, res) {
    res.sendFile(__dirname + '/views/index.html');
}
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

app.use('/api', api);

// app.get('/user/:id', (req, res) => {
//     const user = users.find(u => u.id === +req.params.id);
//     res.send(user || null);
// });

app.get('/', defaultHandler);

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err.message);
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});