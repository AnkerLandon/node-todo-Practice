const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const Todo = require('./models/todo');
const User = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.status(200).send(doc);
    }, (err) => {
        res.status(400).send(err);
    })
});

app.listen(3001, () => {
    console.log('Server Up on 3001');
});

// var newTodo = new Todo({
//     text: 'testy',
//     completed: false
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (err) => {
//     console.log('unable to save todo', err);
// });

// var newUser = new User({
//     email: 'anker.landon@gmail.com'
// });

// newUser.save().then((doc) => {
//     console.log('Saved user', doc);
// }, (err) => {
//     console.log('unable to save user', err);
// });

