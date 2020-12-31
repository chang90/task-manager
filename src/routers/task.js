const express = require('express')
const auth = require('../middleware/auth')
const router = new express.Router()
const Task = require('../models/task')
const ObjectID = require('mongodb').ObjectID

router.post('/tasks', auth, async (req,res) => {
  // const task = new Task(req.body)
  const task = new Task({
    ...req.body,
    owner: req.user._id
  })
  try{
    await task.save()
    res.status(201).send(task)
  } catch (e) {
    res.status(400).send(e)
  }


  // const task = new Task(req.body)

  // task.save().then(() =>{
  //   res.status(201).send(task)
  // }).catch((error)=>{
  //   res.status(400).send(error)
  // })
})



router.get('/tasks', auth, async (req, res) => {
  try {
    await req.user.populate('tasks').execPopulate()
    res.send(req.user.tasks)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }


  // Task.find({}).then((tasks) =>{
  //   res.send(tasks)
  // }).catch((e) =>{
  //   res.status(500).send()
  // })
})

router.get('/tasks/:id', auth, async (req,res) => {
  const _id = req.params.id
  if(!ObjectID.isValid(_id)) {
    return res.status(400).send({
      Error: "id is invalid"
    })
  }

  try {
    // const task = await Task.findById(_id)
    const task = await Task.findOne({_id, owner: req.user._id})
    if(!task) {
      return res.status(404).send()
    }
    res.send(task)
  } catch (e) {
    console.log(e)
    res.status(500).send()
  }
  // Task.findById(_id).then((task) =>{
  //   if(!task) {
  //     return res.status(404).send()
  //   }
  //   res.send(task)
  // }).catch((e) =>{
  //   console.log(e)
  //   res.status(500).send()
  // })
})

router.patch('/tasks/:id', auth, async (req,res) =>{
  const updates = Object.keys(req.body)
  const allowedUpdates = ['completed','description']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if(!isValidOperation) {
    return res.status(400).send({error: 'Invalid updates'})
  }

  const _id = req.params.id
  if(!ObjectID.isValid(_id)) {
    return res.status(400).send({
      Error: "id is invalid"
    })
  }
  try {

    // const task = await Task.findById(req.params.id)
    const task = await Task.findOne({_id: req.params.id, owner: req.user._id})

    if(!task) {
      return res.status(404).send()
    }
    updates.forEach((update) => task[update] = req.body[update])
    await task.save()

    // const task = await Task.findByIdAndUpdate(_id, req.body, {
    //   new: true,
    //   runValidators: true
    // })

    

    res.send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.delete('/tasks/:id', auth, async (req,res) => {
  const _id = req.params.id
  if(!ObjectID.isValid(_id)) {
    return res.status(400).send({
      Error: "id is invalid"
    })
  }

  try {
    const task = await Task.findOneAndDelete({_id, owner: req.user._id})

    if(!task) {
      return res.status(404).send()
    }
    res.send(task)
  } catch (e){
    console.log(e)
    res.status(400).send(e)
  }
})

module.exports = router