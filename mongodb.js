// CRUD Create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
       return console.log('Unable to connect to Database!')
    }

    const db = client.db(databaseName)

    db.collection('users').deleteMany({
        age: 23
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })

})