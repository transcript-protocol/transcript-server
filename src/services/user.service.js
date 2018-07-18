// handles all the logic between the controller and the repository
//

const userRepository = require('../repositories/user.repository')
const guidanceRepository = require('../repositories/guidance.repository')


const userService = {}

/////////////////////////////////////////////////////
// CODE FOR USER ACCOUNT INFO STARTS HERE //////////
///////////////////////////////////////////////////

//get user
userService.getUser = (username) => {
    return userRepository.getUser(username)
}

//create user
userService.storeUser = (userInfo) => {
    if(userInfo.accountType === 'guidance') {
        if(userInfo.code === null) {
            throw new Error('Guidance counselor code not valid')
        }

        return userRepository.storeUser(userInfo)
    } else if(userInfo.accountType === 'student') {


        return userRepository.storeUser(userInfo)
    } else {
        throw new Error('userType must be "student" or "guidance"')
    }
}

//update user
userService.updateUser = (userInfo) => {
    return userRepository.updateUser(userInfo)
}


//delete user
userService.deleteUser = (username) => {
    return userRepository.deleteUser(username)
}
////////////////////////////////////////////////////
// CODE FOR USER ACCOUNT INFO ENDS HERE ///////////
//////////////////////////////////////////////////


//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x
// ------------- account-guidance Demilitarized Zone----------------
//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x


////////////////////////////////////////////////////
// CODE FOR GUIDANCE INFO STARTS HERE /////////////
//////////////////////////////////////////////////


//get guidance
userService.getGuidance = (username) => {
    return guidanceRepository.getGuidance(username)
}

//createguidance
userService.storeGuidance = (userInfo) => {
     return guidanceRepository.storeGuidance(userInfo)   
}

//updateguidance
userService.updateGuidance = (userInfo) => {
    return guidanceRepository.updateGuidance(userInfo)
}    
//deleteguidance
userService.deleteGuidance = (username) => {
    return guidanceRepository.deleteGuidance(username)
}


///////////////////////////////////////////////////
// CODE FOR GUIDANCE INFO ENDS HERE //////////////
/////////////////////////////////////////////////

module.exports = userService

