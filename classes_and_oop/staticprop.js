// Define a class called User
class User {
    // Constructor function that takes a username parameter
    constructor(username) {
        this.username = username; // Set the username property of the User instance
    }

    // Getter method to generate an ID for the user
    get createId() {
        // Return a unique ID based on the username
        return `${this.username}_${Math.floor(Math.random() * 10000)}`;
    }
}

// Create an instance of the User class with the username 'mahendra'
const mahendra = new User('mahendra');

// Define a class called Teacher that extends User
class Teacher extends User {
    // Constructor function that takes username and email parameters
    constructor(username, email) {
        super(username); // Call the constructor of the superclass with the username
        this.email = email; // Set the email property of the Teacher instance
    }
}

// Create an instance of the Teacher class with the username 'iphone' and email 'iphone@gmail.com'
const iphone = new Teacher('iphone', 'iphone@gmail.com');

// Print the ID of the 'iphone' user
console.log(iphone.createId);
