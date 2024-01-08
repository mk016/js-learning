// Array

const myArr = [ 9,5,5,4,2,2]

const myArr2 = new Array(1,3,4,5,6)
console.log(myArr[1]);

// Array Methods 

myArr.push(6)
myArr.pop(6)
myArr.unshift(9)
myArr.shift()

// console.log(myArr.includes(9));
// const newArr =myArr.join()
// console.log( typeof newArr)

// console.log(myArr);


// slice , splice
console.log("A",myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1,3)
console.log("c", myArr)
console.log(myn2)



