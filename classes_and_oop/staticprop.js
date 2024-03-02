class User {
    // Constructor method that initializes a new User instance with a username
    constructor(username){
        this.username  = username; // Assigning the passed username to the instance's username property
    }

    // Method to log the username of the instance
    logMe(){
        console.log(`username: ${this.username}`);
    }

    // Static method that creates and returns an ID (in this case, a hardcoded value for demonstration)
    static createId(){
        return `234`;
    }
}

const mahendra = new User(`mahendra`)
//console.log(mahendra.createId)

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone  = new Teacher ("iphone" , "iphone@gmail.com")
console.log(iphone.createId)


