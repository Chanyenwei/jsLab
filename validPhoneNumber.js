//"if-else statement" use when true or false but many condition need to be fullfil
let userInput= window.prompt("Please enter a phone number:") 
let input = "1234567892"
let valid = true

let digitAmount = input.length
let firstDigit = input[0] //get 1st digit the things get is string because take from string
let lastDigit = input[10] //get last digit
// let isThereAlphabets = false

// console.log(digitAmount, firstDigit, lastDigit)



if ( 
    digitAmount == 11 && 
    firstDigit == 0 &&
    lastDigit % 2 == 0
    // (lastDigit == 2 ||
    // lastDigit == 4 ||
    // lastDigit == 6 ||
    // lastDigit == 8 )
    
){
    alert("This is a valid phone number.")
}
else{
    alert("This is not a valid phone number.")
}




//function
//