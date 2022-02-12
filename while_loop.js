let number1 = 0

while (number1 < 10){
    console.log("the number is:",number1)
    number1+=2
}

let input1 = window.prompt("Please enter yes or no only:")

while(input1!="yes" && input1!="no"){
    console.log("This is not a correct input:",input1)
    input1 = window.prompt("Please enter yes or no only:")
}