// Get the property descriptor of the Math object's property "PI"
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// Log the property descriptor to the console
// console.log(descriptor);

// Log the value of Math.PI to the console
// console.log(Math.PI);

// Attempt to assign a new value to Math.PI
// Math.PI = 5;

// Log the new value of Math.PI to the console
// console.log(Math.PI);

// Define an object named chai representing information about ginger chai
const chai = {
    name: 'ginger chai', // Name of the chai
    price: 250, // Price of the chai
    isAvailable: true, // Availability status of the chai
    orderChai: function(){ // Method to order the chai
        console.log("chai nhi bni"); // Log a message indicating chai is not prepared
    }
}

// Get the property descriptor of the "name" property of the chai object
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Define a new property descriptor for the "name" property of the chai object
Object.defineProperty(chai, 'name', {
    // writable: false, // Property is not writable (commented out to avoid error)
    enumerable: true, // Property is enumerable
});

// Get the updated property descriptor of the "name" property of the chai object
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Iterate over the properties of the chai object
for (let [key, value] of Object.entries(chai)) {
    // Check if the value is not a function
    if (typeof value !== 'function') {
        // Log the key-value pair to the console
        console.log(`${key} : ${value}`);
    }
} 
