// Define a User class with a constructor that takes a username and initializes it
class User {
    constructor(username){
        this.username = username
    }

    // Method to log the username
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// Define a Teacher class that extends the User class
class Teacher extends User {
    // Constructor that takes a username, email, and password, and calls the super constructor with the username
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    // Method to add a course, logging that a new course was added by the teacher's username
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

// Create a new Teacher instance 'chai' with the provided values
const chai = new Teacher("chai" ,"Mahendra@fb.com" , "1234")

// Log the username of 'chai' using the logMe method inherited from User class
chai.logMe()

// Create a new User instance 'masalaChai' with the username "MasalaChai"
const masalaChai = new User("MasalaChai")

// Log the username of 'masalaChai' using the logMe method
masalaChai.logMe()

// Check if 'chai' is an instance of User
console.log(chai instanceof User);

