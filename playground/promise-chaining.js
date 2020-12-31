require('../db/mongoose')

const User = require('../models/user')

//5feacb60643c671d0c4e1a4d

User.findByIdAndUpdate('5feacb60643c671d0c4e1a4d', {
  age: 1
}).then((user) =>{
  console.log(user)
  return User.countDocuments({
    age: 1
  })
}).then((result)=>{
  console.log(result)
}).catch((e)=>{
  console.log(e)
})