/*
Written by Maria Galebach && Anna Cuddeback (but mostly Maria)
7/17/18, updated 
Property of EmblemEDU
Takes elements from form and creates a user object to be passed to the back end
*/

class User {
    constructor(username, password, accountType) {
        this.username = username
        this.password = password
        this.accountType = accountType
    }
}

class Counselor {
    constructor(username, firstName, middleName, lastName, userDOB, userSchool) {
        this.username = username;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.userDOB = userDOB;
        this.userSchool = userSchool;
    }
}

class Student {
    constructor(username, firstName, middleName, lastName, userDOB, userSchool) {
        this.username = username;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.userDOB = userDOB;
        this.userSchool = userSchool;
    }
}

function getRadioValue() {

    if(document.getElementById('typeStudent').checked){
        return 'student';
    }
    else if (document.getElementById('typeCounselor').checked){

        return 'guidance';
    }

}

function createUser(username, password, accountType) {
    return new User(username, password, accountType)
}

function createCounselor(username, firstName, middleName, lastName, userDOB, userSchool) {
    return new Counselor(username, firstName, middleName, lastName, userDOB, userSchool)
}
function createStudent(username, firstName, middleName, lastName, userDOB, userSchool) {
    return new Student(username, firstName, middleName, lastName, userDOB, userSchool)

}

// Scrapes data from form and makes a user
function scrapeUser() {
    var username = document.getElementById("email").value
    var password = document.getElementById("password").value
    var accountType = getRadioValue()

    var user = createUser(username, password, accountType)
    console.log(user)
    return user

}

// Scrapes data from form and makes a guidance counselor
function scrapeCounselor() {
    var username = document.getElementById("email").value
    var firstName = document.getElementById("firstName").value
    var middleName = document.getElementById("middleName").value
    var lastName = document.getElementById("lastName").value
    var userDOB = document.getElementById("DOB").value
    var userSchool = document.getElementById("School").value

    var counselor = createCounselor(username, firstName, middleName, lastName, userDOB, userSchool)
    console.log(counselor)
    return counselor
}

function scrapeStudent() {
    var username = document.getElementById("email").value
    var firstName = document.getElementById("firstName").value
    var middleName = document.getElementById("middleName").value
    var lastName = document.getElementById("lastName").value
    var userDOB = document.getElementById("DOB").value
    var userSchool = document.getElementById("School").value

    var student = createStudent(username, firstName, middleName, lastName, userDOB, userSchool)
    console.log(student)
    return student
}


function scrapeAll() {
    var accountType = getRadioValue()
    scrapeUser()
    if (accountType == 'guidance'){
        scrapeCounselor()
    } else if (accountType == 'student'){
        scrapeStudent()
    }
       
}

function myFunction () {
    console.log('request recieved')
    console.log('fetching your data...')
    fetch('http://localhost:3000/school/12345')
    .then(function(response) {
        console.log(response);
    })
}