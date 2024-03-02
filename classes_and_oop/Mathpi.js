const descripter = Object.getOwnPropertyDescriptor(Math ,"PI")

console.log(descripter);

// console.log(Math.PI)
// Math.PI = 5;
// console.log(Math.PI)

const chai ={
    name : 'tulsi chai ',
    price : 250,
    isAvailable :true

}

//console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai ,"name"));


Object.defineProperty(chai , "name",{
    Writable :false,
    enaumerable : false
})