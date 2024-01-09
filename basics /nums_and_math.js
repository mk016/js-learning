const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.34567
console.log(otherNumber.toPrecision(4));


const pese = 1000000
console.log(pese.toLocaleString());// gives output US number system 
console.log(pese.toLocaleString('en-IN'))// then use 'en-IN ' given output Indian number system 




//@@@@@@@@@@@@@@@@@@@@@@ < Math > @@@@@@@@@@@@@@@@@@@@@@@@

// not use javascript  math library because math library in bulid in js 
console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.8))
console.log(Math.min(4,6,7,8))
console.log(Math.max(6,7,8,9))

console.log(Math.random());// the random method is given values only o and 1 
console.log(Math.random()*10 +1) // will be a random decimal number between 1 (inclusive) and 11 (exclusive)
console.log(Math.random() * 10)// Multiplies the random number by 10, creating a range [0, 10).

const min = 10
const max = 20 

console.log(Math.random()*(max - min + 1))
console.log(Math.floor(Math.random()* (max - min + 1)))
console.log(Math.floor(Math.random() * max - min +1) + min)
