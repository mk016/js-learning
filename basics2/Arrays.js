// Array

//----- Defination ------------------
// An array in JavaScript is a special variable that can hold multiple values. It's like a list where you can store different types of data.

// Example of an array with numbers
let numbers = [1, 2, 3, 4, 5];

// Example of an array with strings
let fruit = ["tamater", "banana", "aalu"];



const myArr = [ 9,5,5,4,2,2]

const myArr2 = new Array(1,3,4,5,6)
console.log(myArr[1]);

// Array Methods 

// 1. push
myArr.push(6) //add elements to the end of an array using the push() method.
console.log(myArr)

//2. pop
myArr.pop(6)   //remove elements from the end of an array using the pop() method.
console.log(myArr)

// 3. unshift
myArr.unshift(9)
console.log(myArr)// Adds one or more elements to the beginning of an array and returns the new length of the array.


//4.shift
myArr.shift()//Removes the first element from an array and returns that element.
console.log(myArr)


//5.lenth
console.log(myArr.length)// find out how many elements are in an array using the length property.



/* 
//6. indexOf() and lastIndexOf():

indexOf(): Returns the index of the first occurrence of a specified element in an array.
lastIndexOf(): Returns the index of the last occurrence of a specified element in an array.
*/

//examples

let fruits = ["apple", "banana", "orange", "apple", "kiwi"];
console.log(fruits.indexOf("apple")); // Outputs: 0
console.log(fruits.lastIndexOf("apple")); // Outputs: 3



// console.log(myArr.includes(9));
// const newArr =myArr.join()
// console.log( typeof newArr)

// console.log(myArr);

// Method to check a Array is Array or not!

console.log(Array.isArray(newArr));


// slice  : extracts a portion of an array and returns a new array without modifying the original array 
console.log("A",myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1); 
console.log("B", myArr);

// splice :  add or remove elements from any position in an array
const myn2 = myArr.splice(1,3)
console.log("c", myArr)
console.log(myn2)


// Maps - this method is use  callback function 
//  the map() method applies a function to each element in an array and returns a new array.

// example 

let number = [1, 2, 3, 4, 5];
let squaredNumbers = number.map(function(num) {
  return num * num;
});
console.log(squaredNumbers); // Outputs: [1, 4, 9, 16, 25]






