// Immediately Invoked  Function Expression (IIFE)

(function coffee (){
     console.log(`DB CONNECT`);
})();



// (function aurcode() {
//     console.log(`DB CONNECT TWO`);
// })();


(   () => {
    console.log(`DB CONNECT TWO`);
})();




(   (name) => {
    console.log(`DB CONNECT TWO ${name}`);
})('kumawat')



