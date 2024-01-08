//singleton
//Object.create

// object literals
const mySym = Symbol("key1")
const JsUser= {
    name : "Mahendra",
    [mySym] : " value",
    age: 19,
    location : "Jaipur",
    email : "user@emil.com",
}

console.log(JsUser.email)
console.log(JsUser["email"])

console.log(JsUser[mySym])

console.log(typeof JsUser[mySym])

// Object.freeze(JsUser)
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("hello js user")
}
JsUser.greetingTwo = function(){
    console.log(` hello js user,${this.name}`)
}

//console.log(JsUser.greeting());

//console.log(JsUser.greetingTwo());
