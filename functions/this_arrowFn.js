const user = {
    username :"Mahendra",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }

}
//console.log(user)
//console.log(user.welcomeMessage)
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()



//console.log(this)

function tea(){
    console.log(this.username);

}
//tea()

// const chai = function () {
//      let username = " Mahendra"
//      console.log(this.username)
// }
const chai =  () => {
     let username = " Mahendra"
     console.log(this)
}
//chai()


// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

//const addTwo = (num1, num2) => num1 + num2


//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({ username :"Mahendra"}) // print Object 



console.log(addTwo(4,6))

