// generate a random color
const randomColor = function(){
    const hex = '01234567890ABCDEF'
    let color ='#'
    for(let i=0 ; i < 6; i++){
        color +=hex[Math.floor(Math.random()*16)]
    }
}