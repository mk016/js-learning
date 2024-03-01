// Define a function SetUsername that takes a username parameter
function SetUsername(username){
    // Perform complex database calls (simulated)
    // Assign the username to the 'username' property of the 'this' object
    this.username = username
    // Log a message to indicate that the function was called
    console.log("called")
}

// Define a function createUser that takes username, email, and password parameters
function createUser(username, email, password){
    // Call the SetUsername function with the provided username
    // Note: Since SetUsername is not a constructor, 'this' inside it refers to the global object (window in browser, global in Node.js) or undefined in strict mode
    SetUsername(username)

    // Assign the email and password parameters to properties of the 'this' object
    // Note: 'this' here refers to the global object, not the 'this' of the createUser function
    this.email = email
    this.password = password
}

// Create a new object 'Mahi' using the createUser function as a constructor
// Pass "chai" as the username, "Mahendra@google.com" as the email, and "123" as the password
const Mahi = new createUser("chai", "Mahendra@google.com", "123")

// Log the Mahi object to the console
console.log(Mahi);
