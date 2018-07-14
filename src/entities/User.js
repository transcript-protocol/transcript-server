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
    nickname: {
        type: String,
        unique: true
    },
    address: {
        type: String,
        unique: true
    },
    sequence: Number,
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', UserSchema)
