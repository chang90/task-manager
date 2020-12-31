require('../db/mongoose')

const Task = require('../models/task')
const User = require('../models/user')

//5feac6718091550394b4e474

// Task.findByIdAndDelete('5feac6718091550394b4e474').then((task) =>{
//   console.log(task)
//   return Task.countDocuments({completed: false})
// }).then((result)=>{
//   console.log(result)
// }).catch((e)=>{
//   console.log(e)
// })

// const updateAgeAndCount = async (id, age) =>{
//   const user = await User.findByIdAndUpdate(id, {age})
//   const count = await User.countDocuments({age})
//   return count;
// }

// updateAgeAndCount('5feacd13c532cd0d80c51127', 22).then((count) =>{
//   console.log(count)
// }).catch((e) =>{
//   console.log(e)
// })

const deleteTaskAndCount = async (id) =>{
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({completed: false})
  return count;
}

deleteTaskAndCount('5feace53b6c8eb39308f861c').then((count) =>{
  console.log(count)
}).catch((e) =>{
  console.log(e)
})