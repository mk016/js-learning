// if

const isUserloggedIn = true
const temperature = 41 

 if(temperature === 41){
    //console.log("less than 50");

 }else{
    //console.log(" temperature is greater than 50")
 }

 //console.log("Execute");

 //<, >, <= , >= , ==, != , === , !==


const score = 200

if(score > 100){

    const power = "fly"
    console.log(`User power : ${power}`);
}


//console.log(`User power : ${power}`);


// when you write code in one line code 


const balance = 1000 


//if( balance > 500)   console.log("test") ,console.log(" test2");

// but test2 always use next line programmer not recommended like this code


if (balance < 500){
    console.log(" less than 500")
}
else if( balance < 750){
    console.log(" less than 750")
} else if (balance < 900){
    console.log("less than 900")
}else if ( balance < 1200 ){
     console.log(" less than 1250")
}

const UserloggedIn = true
const DebitCard = true

const loggedInFromGoogle = false
const loggedInFromEmail = true


//  And Operator return value when both condition are true

if ( UserloggedIn  && DebitCard && 2==2 ){ 
    console.log( " Allow to buy course ");
}


// Or Operator return value when one condition true 

if(loggedInFromGoogle || loggedInFromEmail ){// one condition true 
    console.log(" user logged in for  to buy this course")
}
 