// for of 

//["", "" ,""]
// [ {}, {}, {} ]

const arr = [2,4,6,8,5]

 for (const num of arr) {
    console.log(num)
    
 }

 const greetings = " Hello mere payre dosto "

 for (const greet of greetings){
    console.log(` Each char is ${greet}`)
 }

 // Maps 
 // The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.




 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('Fr', "France")
 map.set('IN', "India")

 console.log(map)

 for (const [key, value] of map){

    console.log(key,":-" , value)
 }


//  const myObejct1 = {

//     game1 : 'NFS',
//     game2 : 'Spiderman'
//  }

 //for(const [key,  value] of myObejct){ // object are not running 
    //console.log(key,":-" ,vlaue)
 //}


 //object 
