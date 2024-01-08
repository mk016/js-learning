//const tinderUser = new Object()
const tinderUser= {}

tinderUser.id = '1234'
tinderUser.name= 'rahul'
tinderUser.isLoggedIn = false
//console.log(tinderUser);


const regularUser = {
    email : " Mail@gamil.com",
    fullName : {
        userFullName :{
            firstName : "Mahendra",
            lastName : " Kumawat"
        }
    }
    

}

//console.log(regularUser)
//console.log(regularUser.fullName.userFullName.firstName)

const obj1 = { 1: " a", 2: " b"}
const obj2 = { 3: "a" , 4 : " b"}

//const obj3 = { obj1, obj2}
//const obj3 = Object.assign(obj1, obj2)
//const obj3 = Object.assign({},obj1, obj2)
const obj3 = { ...obj1, ...obj2}
//console.log(obj3)



console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))


//console.log(tinderUser.hasownPoperty('isLoggedIn'))



const course = {
    courseName : " js in hindi ",
    coursePrice : "9999",
    courseInstructor : " Maehendra Kumawat"
}

const {courseInstructor : Instructor } = course
//console.log(course.courseInstructor);
console.log(Instructor);


// de-structure object  in react 

/*const navbar = ( {company }) =>  { 
      
}
 navbar(company = " Mahendra ")

 console.log(navbar)

*/

/*
{
    Name : "Mahendra",
    courseName : " javaScript",
    "price" : "9999"
}
*/


[
    {},
    {},
    {},
]