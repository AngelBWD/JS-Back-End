const express = require('express');
const port = 8080;

const users = ({
    id: 1,
    firstName: 'FirstName'
});

const app = express();



function defaultHandler(req, res) {
    res.send('Hello World!');
}


app.get('/user/:id', (req, res) => {
    const user = users.find(u => u.id === +req.params.id);
    res.send(user);
});

app.get('/', defaultHandler);



app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});