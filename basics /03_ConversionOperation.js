//let score = "55asdf";
//let score = null
//let score = undefined;

//let score = true
//let score = false
let score =3
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)




//let isLoggedIn =1  ==== true
//let isLoggedIn =0  ==== false
//let isLoggedIn="Mahendra"= true
let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber =33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)





// *********************Operations *************************

let value =5
let negValue = -value

console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)
console.log(2**2)


let str1 = "Mahendra"
let str2 = " Kumawat"
let str3 = str1 + str2 
console.log(str3)// concatenation of strings 


let num1 , num2 , num3 
num1 = num2 = num3 = 2+2

let gameCounter =100

++gameCounter;
console.log(gameCounter)


// harsh bhaiya give me a example  thanks harsh bhiya aapne aache se muje samjaya 

let i = 0;

// Prefix ++i;
// Postfix i++

console.log(++i == i++);
// Output : True

// Prefix 
let a = ++i;
console.log('a:', a);
console.log('i:', i);

// Output a:     i:

// PostFix
let b = i++;
console.log('b:', b);
console.log('i:', i);

// Output b:     i:

// output a: 1 i :1
// output b: 0 i :1