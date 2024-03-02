// Define a function named multipleBy5 that takes a number as an argument and returns the result of multiplying that number by 5
function multipleBy5(num){
    return num * 5;
}

// Add a property named 'power' to the function object 'multipleBy5' with a value of 2
multipleBy5.power = 2;

// Call the multipleBy5 function with an argument of 5 and log the result (25) to the console
console.log(multipleBy5(5));

// Log the value of the 'power' property of the function object 'multipleBy5' to the console (2)
console.log(multipleBy5.power);

// Log the value of the 'prototype' property of the function object 'multipleBy5' to the console (an empty object {})
console.log(multipleBy5.prototype);

// Define a constructor function named 'createUser' that takes two arguments, 'username' and 'score', and assigns them as properties of the new object created by the constructor
function createUser(username, score){
    this.username = username;
    this.score = score;
}

// Add a method named 'increment' to the prototype of 'createUser' that increments the 'score' property of the object
createUser.prototype.increment = function(){
    this.score++;
}

// Add a method named 'printMe' to the prototype of 'createUser' that logs the value of the 'score' property of the object to the console
createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}

// Create two new instances of 'createUser' with the names 'chai' and 'tea', and scores of 25 and 250 respectively
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

// Call the 'printMe' method of the 'chai' object to log its score to the console (25)
chai.printMe();
