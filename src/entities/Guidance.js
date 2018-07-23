const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcrypt-nodejs');

//should be connection for everything vvvvv
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost/transcript')
// mongoose.connect('mongodb://localhost/transcript')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log('GUIDANCE SCHEMA CONNECTED') //just change for whatever schema you're connecting
});
// should be mongoose connection for everything in ANY PROJECT EVER^^^^

const Schema = mongoose.Schema
const GuidanceSchema = new Schema({
  
    username: { //matches an email in users, taken from one html field
      type: String,
      required: true,
      index: { unique: true }
    },
    
    firstName: { //suggest school email for GC and not school email for student
          type: String,
          required: true
      },

    middleName: { //suggest school email for GC and not school email for student
        type: String
    },

    lastName: { //suggest school email for GC and not school email for student
        type: String,
        required: true
    },

    userDOB: { //suggest school email for GC and not school email for student
        type: String,
        required: true
    },

    schoolID: {
      type: String, 
      required: true
    },

    sequence: Number,
    updatedAt: { type: Date, default: Date.now }
})


// this is stuff for handling passwords which we don't actually need for this schema since it doesn't save passwords
// GuidanceSchema.pre('save', function(next) {
//     const user = this;

//     // only hash the password if it has been modified (or is new)
//     if (!user.isModified('password')) {
//         return next();
//     }

//     // generate a salt
//     bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//         if (err) {
//             return next(err);
//         }

//         // hash the password using our new salt
//         bcrypt.hash(user.password, salt, null, function(err, hash) {
//             if (err) {
//                 return next(err);
//             }

//             // override the cleartext password with the hashed one
//             user.password = hash;
//             return next();
//         });
//     });
// });

// GuidanceSchema.methods.comparePassword = function(candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };

module.exports = mongoose.model('Guidance', GuidanceSchema)
