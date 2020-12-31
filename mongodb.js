const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) =>{
  if(error) {
    return console.log('Unable to connect to DB!')
  }

  const db = client.db(databaseName)

  // db.collection('users').insertOne({
  //   _id: id,
  //   name: 'abc',
  //   age: 20
  // }, (error, result) =>{
  //   if (error) {
  //     return console.log('Unable to insert user')
  //   }
  //   console.log(result.ops)
  // })

  // db.collection('users').insertMany([
  //   {
  //     name: 'sdf',
  //     age: 21
  //   },
  //   {
  //     name: 'wer',
  //     age: 23
  //   }
  // ],(error, result) =>{
  //   if (error) {
  //     return console.log('Unable to insert documents')
  //   }
  //   console.log(result.ops)
  // })

  // db.collection('documents').insertMany([
  //   {
  //     description: 'task 1',
  //     completed: true
  //   },
  //   {
  //     description: 'task 2',
  //     completed: true
  //   }
  // ],(error, result) =>{
  //   if (error) {
  //     return console.log('Unable to insert documents')
  //   }
  //   console.log(result.ops)
  // })

  // db.collection('users').findOne({ _id: new ObjectID("5fe9d2cfa73b8f1248574f5a") }, (error, user) =>{
  //   if(error) {
  //     return console.log('Unable to fetch')
  //   }
  //   console.log(user)
  // })
  // db.collection('users').find({age:20}).toArray((error, users) =>{
  //   console.log(users)
  // })

  // db.collection('documents').findOne({_id:new ObjectID("5fe9cf807246882b20592bb8")},(error, task) =>{
  //   console.log(task)
  // })

  // db.collection('documents').find({completed:true}).toArray((error, tasks) =>{
  //   console.log(tasks)
  // })
  // db.collection('users').updateOne({
  //   _id: new ObjectID("5fe9d4e1e70a0c33e8bef77b")
  // }, {
  //   $inc: {
  //     age: 1
  //   }
  // }).then((result)=>{
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })
//   db.collection('documents').updateMany(
//     {
//       completed: true
//     },
//     {
//       $set: {
//         completed: false
//       }
//     }
//  ).then((result)=>{
//     console.log(result.modifiedCount)
//   }).catch((error) => {
//     console.log(error)
//   })
  // db.collection('users').deleteMany({
  //   age: 20
  // }).then((result) => {
  //   console.log(result);
  // }).catch((error) => {
  //   console.log(error)
  // })
  db.collection('documents').deleteOne({
    description: "task 1"
  }).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error)
  })
})