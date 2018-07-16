const userRepository = require('../repositories/user.repository')

const userService = {}

//create user
//update user
//delete user
//get user

userService.getUser = (id) => {
    return userRepository.getUser(id)
}

userService.storeUser = (userInfo) => {
    return userRepository.storeUser(userInfo)
}

userService.deleteUser = (id) => {
    return userRepository.deleteUser(id)
}

module.exports = userService