const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017'
const dbname = 'mongo-shop'

mongoClient.connect(url, {}, (error, client) =>  {
      if (error)
            console.log('Cannot connect to the database')
      const db = client.db(dbname)
      
      //users
      db.collection('users').insertOne({
            name: 'Jon',
            age: 20

      }, (error, result) => {
            if (error)
                  console.log('Adding user error', error)
            console.log(result.ops)
      })

      console.log('Database connected')
})