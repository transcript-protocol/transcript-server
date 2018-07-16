const PORT = 3000
const app = require('express')()

// const moment = require('moment')
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }), bodyParser.json())

//controllers
const userController = require('./controllers/user.controller')

//routes
app.get('/helloworld', (req, res) => res.end('hello world'))

app.get('/user/:id', userController.getUser)
app.post('/user', userController.storeUser)
    // app.put('/user', userController.updateUser)
app.delete('/user', userController.deleteUser)

//error handling
app.use((req, res, next) => res.status(404).send("Resource Not Found"))

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Server Error')
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))

module.exports = app