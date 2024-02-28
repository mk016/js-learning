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
    
    new Promise(function(resolve, reject){ // this is second promise
        setTimeout(function(){
            console.log("Async task 2 ");
            resolve()
        },1000)
    }).then(function(){
        console.log('Async 2 reolved');
    })
    
    const promiseThree = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve({username : "Mahendra", email : "mahendra@gamil.com"})
        },1000)
    })
    
    promiseThree.then(function(user){
        console.log(user);
    })
    
    const promiseFour = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = false; // Changed to false to demonstrate resolve case
            if(!error){
                resolve({username : "MAHENDRA" , password: "123"})
            } else {
                reject ('ERROR : somthing went wrong')
            }
        },1000)
    })
    