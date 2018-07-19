// defines all your routes, is called server.js beacuse it's the top level file
// server.js is kind of a misnomer because all of this is the server
// is called server.js because ti's the top level file

const PORT = 3000
const app = require('express')()

// const moment = require('moment')
const path = require('path')
const bodyParser = require('body-parser')

//this says if you receive json automatically convert to javascript object
// takes weird json file in request and makes it into req.body
//`app.use` says use this library, 
app.use(bodyParser.urlencoded({ extended: true }), bodyParser.json())

//controllers
const userController = require('./controllers/user.controller')

//routes

app.get('/helloworld', (req, res) => res.end('hello world')) //hello world

//generic accounts
app.get('/user/:username', userController.getUser) //gets user account data (uname, pass, account type) from username
app.post('/user', userController.storeUser) // sets user account data (uname, pass, account type)
app.put('/user', userController.updateUser) //updates user account data (uname, pass, account type) by username
app.delete('/user/:username', userController.deleteUser) //deletes user account (uname, pass, account type) by username

//guidance counselor
app.get('/guidance/:username', userController.getGuidance) //gets guidance counselor data (name, DOB, school name) from username
app.post('/guidance', userController.storeGuidance) // sets guidance counselor data (name, DOB, school name)
app.put('/guidance', userController.updateGuidance) //updates guidance counselor data (name, DOB, school name) by username
app.delete('/guidance/:username', userController.deleteGuidance) //deletes guidance counselor data (name, DOB, school name) by username

//student
app.get('/student/:username', userController.getStudent) //gets student data (name, DOB, school name) from username
app.post('/student', userController.storeStudent) // sets student data (name, DOB, school name)
app.put('/student', userController.updateStudent) //updates student data (name, DOB, school name) by username
app.delete('/student/:username', userController.deleteStudent) //deletes student data (name, DOB, school name) by username


//error handling
app.use((req, res, next) => res.status(404).send("Resource Not Found"))

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Server Error')
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))

module.exports = app