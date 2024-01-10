// const coding = [ "js" , "ruby" , "java", "python", "cpp"]


// const values = coding.forEach((item) => {// for each hamesh value ko print(return) nhi karwata h 
//     //console.log(item);// output : printing values
//     return item
// })

// console.log(values);// output : undefined

const myNums = [1,3,6,8,4,6]


const newNums = myNums.filter((num) => { // when use {} then write retrun -- return  num < 4
   return num < 4
})

// console.log(newNums) // output without return : [] , output with return [1,3]



const newNum = []

myNums.forEach((num ) => {
     if(num > 4){
        newNums.push(num)
     }
})

//console.log(newNums)// output : [1,3,6,8,6]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //const userBooks = books.filter((bk) => bk.genre === 'History')
  let userBooks = books.filter((bk) => bk.genre === 'History')

//   userBooks = books.filter((bk) => {
//      return bk.publish >= 2000 // use return because user {}(scope)
//   })
  userBooks = books.filter((bk) => {
     return bk.publish >= 1995 && bk.genre === 'History'
  })

  console.log(userBooks);



// Maos

  const myNumber = [ 2,4,6,7,5,3]

  myNumber.map((num) => num +10)
  console.log(newNums)

 // const newNumers =  myNumber.map().map() // 2 maps bhi use kar sakte h 

   const newNumers = myNumber
                     .map((num) => num * 10)
                     .map((num) => num +1)
                     .filter((num)=> num >= 40)

   console.log(newNumers)