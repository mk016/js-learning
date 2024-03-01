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

const User = {
    Name : "chai",
    Email : "mahendra@google.com"
}

 const Teacher = {
     makeVideo : true
 }

 const teachingSuppoert = {
    isAvailable :false
 }

 const TASupport = {
    makeAssignment : 'Js assignment',
    fullTime : Ture,
    __proto__: teachingSuppoert
 }

 Teacher.__proto__ = User

// modern syntax 

Object.ser