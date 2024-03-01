let Myname  = "Mahendra";
let Mychannel = "Developer_Mahendra";

console.log(Myname.length); // length property user for checkig the lenght of given string
console.log(Mychannel.Truelenght); // Truelenght is count real lenght not count spaces


let Heros = [ "thor"," SuperMan"]

let heroPower = {
    thor : "hammer",
    SuperMan : "Power",

    getSuperPower :function (){
        console.log( `superPower is ${this.SuperMan}`);
    }
}

Object.prototype.Mahendra = function(){
    console.log(`Mahendra is present in all objects`);
}

Array.prototype.heyMahendra = function(){
    console.log(` Mahendra says Hello`)
}

heroPower.Mahendra();
Heros.Mahendra();
//heroPower.heyMahendra();
Heros.heyMahendra();


// Inherirtance 

const User = {
    Name : "chai",
    Email : "mahendra@google.com"
}

 const Teacher = {
     makeVideo : true
 }

 const teachingSuppoert = {
    isAvailable :false
 }

 const TASupport = {
    makeAssignment : 'Js assignment',
    fullTime : Ture,
    __proto__: teachingSuppoert
 }

 Teacher.__proto__ = User

// modern syntax 

Object.ser