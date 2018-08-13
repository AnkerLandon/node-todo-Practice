// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MDB server');
    }
    console.log('Connected to MDB server');
    const db = client.db('TodosApp');

    // db.collection('Todos').insertOne({
    //     text: 'Somthing to do',
    //     completed: false
    // }, (err, res) => {

    //     if(err) {
    //         return console.log('Unable to insert Todo', err);
    //     }

    //     console.log(res.ops[0]._id.getTimestamp());
    // });

    db.collection('Todos').find({completed: true}).toArray().then((docs) => {
        console.log('todos');
        console.log(docs);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });


    //client.close();
});