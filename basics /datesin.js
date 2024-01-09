// Dates 

// WHY USE DATES 
// dates are commonly used for various purposes, including handling timestamps, scheduling events, working with time intervals, 
//and displaying or manipulating calendar-related information

 let myDate = new Date() // date object

 console.log(myDate);
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());


 // check typeof date
 console.log(typeof myDate);



 //let myCreatedDate = new Date(2024 , 1, 44)
 //let myCreatedDate = new Date(2024 , 0, 23, 5,3)gives Parameter (Year , Month , Dates , Hour , Min , Sec)


let myCreatedDate = new Date("2024-01-14")

 console.log(myCreatedDate.toDateString());
 console.log(myCreatedDate.toLocaleString());


 let myTimeStamp = Date.now()
 console.log(myTimeStamp);

 console.log(myCreatedDate.getTime());

 console.log(Math.floor(Date.now()/10000))//converts mili second into seconds 


 newData.toLocaleString('defult',{
    weekday : "long"
 })
 