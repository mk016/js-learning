const userEmail = "Mail@gmail.com"// string = value = true
                                // string  = empty = flase
                                // array = empty = true 


if (userEmail){
    console.log("Got user Email")
}else {
    console.log("Don't  have user email ");

}

// falsy values 

//false , o , -0 , bigInt on , "" , null , undefined , NaN


//truthy values 

// "0 " , ' false' , " " , [], {} ,function(){}

// if ( userEmail.length === 0){
 //   console.log(" Array is empty");
//}



const emptyObj = {}

 if (Object.keys(emptyObj).length  === 0 ){
    console.log("Object is empty ")
}

// value compare

/* false == 0 
true //output

false = ''
true  //output 

0 == ''
true //output
*/



// Nullish Coalescing Operaor (??) : null undefined

let val1 ;
//val1 = 5 ?? 2
//val1 = null ?? 10
//val1 = undefined ?? 10

val1 = null ?? 10 ?? 5




console.log(val1)