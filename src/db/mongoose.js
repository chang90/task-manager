const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/tast-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})



// const me = new User({
//   name: "    Ara   ",
//   email: '123@GMAIL.com   ',
//   password: "123456789"
// })

// me.save().then(()=>{
//   console.log(me)
// }).catch((error) => {
//   console.log('Error', error)
// })



// const task1 = new Task({
//   description: 'Task 3  ',
//   completed: false
// })

// task1.save().then(() => {
//   console.log(task1)
// }).catch((error) => {
//   console.log('Error', error)
// })