const promiseOne = new Promise(function (resolve, reject) {

    // DO an async task
    // DB calls, cyrptography , network
    setTimeout(function () {
        console.log(`Async task is compelete`);
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");//  jab hmm resolve function ko call karte h tab vo then se connect hota h 

})

new Promise(function (resolve, reject) { // this is second promise
    setTimeout(function () {
        console.log("Async task 2 ");
        resolve()
    }, 1000)
}).then(function () {
    console.log('Async 2 reolved');
})




const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Mahendra", email: "mahendra@gamil.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})



const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false; // Changed to false to demonstrate resolve case
        if (!error) {
            resolve({ username: "MAHENDRA", password: "123" })
        } else {
            reject('ERROR : somthing went wrong')
        }
    }, 1000)
})


promiseFour
    .then((user) => {
        console.log(user);
        return user.username; // Corrected variable name to access username property
    })
    .then((username) => {
        console.log(username); // Correctly accessing the username property
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => console.log(" The promise is either resolved or rejected")) // This will always run


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javaScript", password: '1233' })
        } else {
            reject(`ERROR : js went wrong`)
        }
    }, 1000)
})

promiseFive
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error); // Handle the rejected promise here
    })
    .finally(() => console.log("The promise is either resolved or rejected"));


async function consumePromiseFive() {//ye function kuch time baad exicute hota h  
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') // ye url kuch user ka data provide kar rha h 


        const data = await response.json()
        console.log(data);
    } catch(error) {
        console.log("E :", error);
    }
    }

    getAllUser()


    fetch('https://api.github.com/user/mk016')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error)=> console.log(error))

    //promise.all
    //yes this is also availabale, 