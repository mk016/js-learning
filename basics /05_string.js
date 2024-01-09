//  let name = "Mahendra"
//   let coder = "coder"\

// template method 


 console.log(`hello guys my Name is ${name} i am a ${coder}`)
 const name = " Mahendra"
const repoCount = 50

const gameName = new String('Mahendra')
// console.log(gameName.__proto__);

// console.log(gameName.length); // given lenth of object 
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.lastIndexOf(gameName));

console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,5)// not use last value 
console.log(newString)


const anotherString = gameName.slice(-8,6)// both values gives 
console.log(anotherString)

const newStringOne= "   Mahendra.  "
console.log(newStringOne);
console.log(newStringOne.trim());

// this method use replacing and including   values in big data , url 

const url = "https://github.com/mk%216/js"
console.log(url.replace('%2','0'));


console.log(url.includes('rahul'));

console.log(gameName.split('-'));



