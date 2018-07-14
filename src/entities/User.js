const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
mongoose.createConnection('mongodb://localhost/gmblr')
// mongoose.connect('mongodb://localhost/gmblr')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log('USER SCHEMA CONNECTED')
});

const Schema = mongoose.Schema
const UserSchema = new Schema({
    username: { //suggest school email for GC and not school email for student
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    accountType: {
        type: String
    },
    sequence: Number,
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', UserSchema)
