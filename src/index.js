const app = require('./app')
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on ${port}`)
})



// const myFunctinon = async () =>{
//   const token = jwt.sign({_id:'asd123'},'this is my cource',{expiresIn: '7 days'})
//   console.log(token)

//   const data = jwt.verify(token, 'this is my cource')
//   console.log(data)
// }

// myFunctinon()

// const Task = require('./models/task')

// const User = require('./models/user')

// const main = async () =>{
//   // const task = await Task.findById('5fed3fc53ec7354c542bb7ae')
//   // await task.populate('owner').execPopulate()
//   // console.log(task.owner)
//   const user = await User.findById('5fed3fab3ec7354c542bb7aa')
//   await user.populate('tasks').execPopulate()
//   console.log(user.tasks)
// }

// main()

// const multer = require('multer')

// const upload = multer({
//   dest:'images',
//   limits: {
//     fileSize: 1000000
//   },
//   fileFilter(req, file, callback) {
//     if(!file.originalname.match(/\.(doc|docx)$/)) {
//       return callback(new Error('File must be in word document'))
//     }
//     callback(undefined, true)
//   }
// })


// app.post('/upload', upload.single('upload'), (req, res) =>{
//   res.send()
// }, (error,req,res,next) =>{
//   res.status(400).send({error: error.message})
// })