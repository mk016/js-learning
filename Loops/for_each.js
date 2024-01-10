const coding  = ["js", "rb", "py","java", "cpp"]

coding.forEach(function(val){
    console.log(val)
})

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){

//     console.log(item);
// }

// coding.forEach(printMe)


coding.forEach((item, index, arr) =>{
    console.log(item, index ,arr);
})



const myCoding =[

    {
        languageName : "JavaScript",
        languageFile : "index.js"
    },

    {
        languageName : "Python",
        languageFile : "App.py"
    },
    {
        languageName : "Java",
        languageFile : "file.java"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);// isme hmmne array ke object ko acces kiya h or ye item ki jagah hmm or koi dusra name bhi le sakte h 
    console.log(item.languageFile);
})
