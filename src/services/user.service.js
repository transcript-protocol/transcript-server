const userRepository = require('../repositories/user.repository')

const userService = {}

//create user
//update user
//delete user
//get user

userService.getNickname = (address) => {
    return userRepository.getNickname(address)
}

userService.storeNickname = (userInfo) => {
    return userRepository.storeNickname(userInfo)
}

userService.deleteNickname = (address) => {
    return userRepository.deleteNickname(address)
}

module.exports = userService
