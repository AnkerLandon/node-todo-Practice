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

    //===========add new================

    // db.collection('Todos').insertOne({
    //     text: 'Somthing to do',
    //     completed: false
    // }, (err, res) => {

    //     if(err) {
    //         return console.log('Unable to insert Todo', err);
    //     }

    //     console.log(res.ops[0]._id.getTimestamp());
    // });

    // db.collection('Todos').find({completed: true}).toArray().then((docs) => {
    //     console.log('todos');
    //     console.log(docs);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // =================delete=================

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Andrew'});

    // db.collection('Users').findOneAndDelete({
    //      _id: new ObjectID("57ac8d47878a299e5dc21bc8")
    // }).then((results) => {
    //      console.log(JSON.stringify(results, undefined, 2));
    // });

    // ==========find======================

    // db.collection('Todos').find({
    //   _id: new ObjectID('57bb36afb3b6a3801d8c479d')
    // }).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //   console.log(`Todos count: ${count}`);
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    // db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // });

    //===========update==============

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID('57bc4b15b3b6a3801d8c47a2')
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // });

    // db.collection('Users').findOneAndUpdate({
    //   _id: new ObjectID('57abbcf4fd13a094e481cf2c')
    // }, {
    //   $set: {
    //     name: 'Andrew'
    //   },
    //   $inc: {
    //     age: 1
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // });


    client.close();
});