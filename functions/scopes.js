let a = 200 
 
 if (true){
     let a = 10
    const b = 20 
   //console.log("Inner :",a)
   var c = 30;
    
}

console.log(a); // Throws Error
console.log(b); // Throws Error
console.log(c); // print : 30 



 //console.log(a)


 function one () {
     const username =" MAHENDRA"

      function two (){
        const website  =  "instagram"
        console.log(username);
      }
      //console.log(website)
      two()
 }
one()



if(true){
    const username = "MAHENDRA"
    if(username === "MAHENDRA"){
        const website = "youtube"
        console.log(username + website );

    }
    //console.log(website);
}
//console.log(username);



//------------------------------ Interesting Topic -------------------------------------



function addone(num){
    return num +1
}

addone(5)

console.log(addone(5))


const addTwo = function(num){
    return num + 2 
}
addTwo(5)