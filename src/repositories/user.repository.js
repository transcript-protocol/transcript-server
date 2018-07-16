const User = require('../entities/User')

const userRepository = {}

userRepository.getUser = (id) => {
    return User.findOne({ id })
}

userRepository.storeUser = (userInfo) => {
    console.log('HERE ', userInfo)
    const newUser = new User(userInfo)
    return newUser.save()
}

userRepository.deleteUser = (id) => {
    return User.findOne({ id }).remove()
}

module.exports = userRepository