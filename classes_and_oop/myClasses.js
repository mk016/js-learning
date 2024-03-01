// ES6

class User {
    constructor( username , email, password){
        this.username = username ;
        this.email = email ;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User ( "Mahi" , "Mahendra@google.com" , "1234")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the sence

function User(username ,email ,password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea  = new User (" tea", "Tea@gamil.com" ," 1234")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());