const User = require('../entities/User')

const userRepository = {}

userRepository.getNickname = (address) => {
    return User.findOne({ address })
}

userRepository.storeNickname = (userInfo) => {
    console.log('HERE ', userInfo)
    const newUser = new User(userInfo)
    return newUser.save()
}

userRepository.deleteNickname = (address) => {
    return User.findOne({ address }).remove()
}

module.exports = userRepository
