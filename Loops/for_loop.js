//for loop 

for( let i = 0 ; i < 10; i++){
    const element = i;

    if(element == 5){
       // console.log("5 is best number ");
    }
    //console.log(element)

}


for(let i=0; i<=10; i++){
    //console.log(`Outer loop vlaue : ${i}`)
    for(let j=0; j<=10; j++){
       // console.log(`Inner loop value ${j} and inner loop ${i}`);

       //console.log(i + "*" + j  + " = " + i*j  );
    }
}


// break and continue 

//1. break 
// for (let i = 1; i<=20; i++){
//     if(i == 5 ){
//         console.log( `Detected 5`);
//         break;
//     }
//     console.log(`Value of  i is ${i}`);
// }

// 2. continue

for (let i = 1; i<=20; i++){
    if(i == 5 ){
        console.log( `Detected 5`);
        continue;
    }
    console.log(`Value of  i is ${i}`);
}

 