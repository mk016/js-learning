const promiseOne = new Promise(function(resolve, reject){

// DO an async task
// DB calls, cyrptography , network
setTimeout(function(){
    console.log(`Async task is compelete`);
    resolve()
},1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");//  jab hmm resolve function ko call karte h tab vo then se connect hota h 

})