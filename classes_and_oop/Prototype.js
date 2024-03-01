let Myname  = "Mahendra";
let Mychannel = "Developer_Mahendra";

console.log(Myname.length); // length property user for checkig the lenght of given string
console.log(Mychannel.Truelenght); // Truelenght is count real lenght not count spaces

// Define an array called Heros with two elements: "thor" and "SuperMan"
let Heros = ["thor", "SuperMan"];

// Define an object called heroPower with properties for "thor" and "SuperMan",
// and a method getSuperPower that logs the superpower of SuperMan
let heroPower = {
    thor: "hammer",
    SuperMan: "Power",

    getSuperPower: function () {
        console.log(`superPower is ${this.SuperMan}`);
    }
}

// Add a method Mahendra to the Object.prototype so that all objects
// (including heroPower and arrays like Heros) can call this method
Object.prototype.Mahendra = function () {
    console.log(`Mahendra is present in all objects`);
}

// Add a method heyMahendra to the Array.prototype so that all arrays
// (including Heros) can call this method
Array.prototype.heyMahendra = function () {
    console.log(` Mahendra says Hello`)
}

// Call the Mahendra method on the heroPower object and the Heros array
heroPower.Mahendra();
Heros.Mahendra();

// Call the heyMahendra method on the Heros array
Heros.heyMahendra();


// Inherirtance 

// Define an object User representing a user with a Name and Email
const User = {
    Name: "chai",
    Email: "mahendra@google.com"
}

// Define an object Teacher representing a teacher with a makeVideo property
const Teacher = {
    makeVideo: true
}

// Define an object teachingSuppoert representing a teaching support with an isAvailable property
const teachingSuppoert = {
    isAvailable: false
}

// Define an object TASupport representing a TA support with a makeAssignment property, fullTime property, and inheriting from teachingSuppoert
const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: teachingSuppoert
}

// Set the prototype of Teacher to be User, so Teacher inherits properties from User
Teacher.__proto__ = User


// modern syntax 

// Set the prototype of teachingSuppoert to be Teacher, so teachingSuppoert inherits properties from Teacher
Object.setPrototypeOf(teachingSuppoert, Teacher)

// Define a string variable anotherUsername
let anotherUsername = "Mahendra_coder"

// Add a method Truelenght to the String prototype to log the trimmed string and its length
String.prototype.Truelenght = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

// Call the Truelenght method on the anotherUsername string
anotherUsername.Truelenght()

// Call the Truelenght method on the "Mahendra" string literal
"Mahendra".Truelenght()

// The following line is commented out due to a syntax error
// Call the Truelenght method on the "icecrime" string literal
//"icecrime".Truelenght()
