const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
    
// /*
//     output :
//     acc:0 and currval: 1
//     acc:1 and currval: 2
//     acc:3 and currval: 3
//     6 */



//     return acc + currval
// }, 0)

// console.log(myTotal)


// using arrow function 

const myTotal = myNums.reduce((acc, curr) => acc + curr ,0)

console.log(myTotal) // output : 6

const shopping = [

    {
        itemName : "Js Course",
        Price    : 2999
    },
    {
        itemName : "Python Course",
        Price    : 999
    },
    {
        itemName :" Data science course",
        Price    : 5999
    },

]

const PriceToPay = shopping.reduce((acc,item) => acc + item.Price, 0)
console.log(PriceToPay)
