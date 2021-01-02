const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userOneId = new mongoose.Types.ObjectId()
const token = jwt.sign({
	_id: userOneId
}, process.env.JWT_SECRET)

const userOne = {
	_id: userOneId,
	name: 'Chang',
	email: 'hiby.90hou@example.com',
	password: 'MyPass123123',
	tokens: [{
		token
	}]
}

const userTwoId = new mongoose.Types.ObjectId()

const userTwo = {
	_id: userTwoId,
	name: 'hiby',
	email: 'hiby.90hou@example1.com',
	password: 'MyPass1231231',
	tokens: [{
		token: jwt.sign({_id: userTwoId}, process.env.JWT_SECRET)
	}]
}

const taskOne = {
  _id: new mongoose.Types.ObjectId(),
  description: 'First task',
  completed: false,
  owner: userOneId
}

const taskTwo = {
  _id: new mongoose.Types.ObjectId(),
  description: 'second task',
  completed: true,
  owner: userOneId
}

const taskThree = {
  _id: new mongoose.Types.ObjectId(),
  description: 'thrid task',
  completed: true,
  owner: userTwoId
}


const setupDatabase = async () => {
  await User.deleteMany()
  await Task.deleteMany()

	await new User(userOne).save()
	await new User(userTwo).save()
	await new Task(taskOne).save()
	await new Task(taskTwo).save()
	await new Task(taskThree).save()
}

module.exports = {
  userOneId,
  userOne,
  userTwoId,
  userTwo,
  taskThree,
  taskOne,
  taskTwo,
  setupDatabase
}