const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


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