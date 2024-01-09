/*
 two types of datatypes based on memory storage 
 1. primitive datatype
 2. Non-primitive(Reference) datatypes 

 the primitive datatypes storing values in " stack memory"
 and the Reference datatypes storing values in "heap memory"


 1. Primitive Datatypes
 the primitive datatypes is 7 types  

7 types : string , Number , boolearn , null , undefined, symbol, bigint
*/


 const score = 100
 const scoreValue= 100.3

 const isLoggedIn = false 
 const outsideTemp = null 
 let useEmail;

 const id = Symbol('1234')
 const anotherId = Symbol('1234');

 console.log(id === anotherId)//Output False




 //2. Reference type (Non primitive)

//array , object, Function 


// 1. Array

const heros = ["Shaktiman", "Naagraj", "Tony", "SpiderMan"];


// Objects 


let myObj ={

   Name: "Mahendra",
   age :20,
};



 // bigint example
 const bigNumber = 234567865432456786543n

