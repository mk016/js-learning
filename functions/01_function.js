
console.log

function myName (){

    console.log("M");
    console.log("a");
    console.log("h");
    console.log("e");
    console.log("n");
    console.log("d");
    console.log("r");
    console.log("a");
}

//myName();

function addTwoNumbers(number1 , number2){
    //console.log(number1 + number2)
   
}
function addTwoNumbers(number1 , number2){
    //console.log(number1 + number2)
    let result = number1 + number2
    return result
}


addTwoNumbers(4,6)
addTwoNumbers(5, "a")

const result = addTwoNumbers(3,5 )
//console.log(" Result ", result)


function loginUserMessage(username = "Joy "){

    if(username === undefined){// (!username) also use
        console.log(" Please Enter a  Username");
        return
    }

    return ` ${username} just logged in `

}

//loginUserMessage("Mahendra")

//console.log(loginUserMessage("Mahendra"))
console.log(loginUserMessage("Mahendra"))

/*`function anonymous (${args.join (",")}
){

    ${functionBody}

}`;
*/



