const User = require('../entities/User')

const userRepository = {}

userRepository.getUsername = (address) => {
    return User.findOne({ address })
}

userRepository.storeUsername = (userInfo) => {
    console.log('HERE ', userInfo)
    const newUser = new User(userInfo)
    return newUser.save()
}

userRepository.deleteUsername = (address) => {
    return User.findOne({ address }).remove()
}

module.exports = userRepository
