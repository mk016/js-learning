// Define a User class using ES6 class syntax
class User {
    // Constructor to initialize username, email, and password properties
    constructor( username , email, password){
        this.username = username ;
        this.email = email ;
        this.password = password
    }

    // Method to encrypt the password by appending 'abc'
    encryptPassword(){
        return `${this.password}abc`
    }

    // Method to change the username to uppercase
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

// Create a new User instance 'chai' with the provided values
const chai = new User ( "Mahi" , "Mahendra@google.com" , "1234")

// Log the result of calling encryptPassword and changeUsername on 'chai'
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// Behind the scenes using constructor functions and prototypes

// Define a User constructor function
function User(username ,email ,password){
    this.username = username
    this.email = email
    this.password = password
}

// Add methods to the User prototype to encrypt the password and change the username
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

// Create a new User instance 'tea' using the constructor function
const tea  = new User (" tea", "Tea@gamil.com" ," 1234")

// Log the result of calling encryptPassword and changeUsername on 'tea'
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
