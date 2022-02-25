let inputGender = window.prompt("Please enter your gender (only accept F and M):")
let gender = ""

while(inputGender!="F" && inputGender!="M"){
    alert("Please fill in a valid gender.",inputGender)
    inputGender = window.prompt("Please enter your gender (only accept F and M):")
}

if(inputGender=="F"){
    gender="You are a female, "
}
else{
    gender="You are a male, "
}


let inputAge = (window.prompt("Please enter your age (only accept 1-100):"))
let age = ""

while(isNaN(inputAge)==true || (parseInt(inputAge)<1)||(parseInt(inputAge)>100)){
    alert("Please enter a valid age according to the instruction.")
    inputAge = window.prompt("Please enter your age (only accept 1-100):") 
}

if(parseInt(inputAge)<=12){
    age = "you are a kid, "
}
else if((parseInt(inputAge)>12) && (parseInt(inputAge)<=18)){
    age = "you are a teen, "
}
else if((parseInt(inputAge)>18) && (parseInt(inputAge)<=25)){
    age = "you are a youth, "
}
else if((parseInt(inputAge)>25) && (parseInt(inputAge)<=60)){
    age = "you are a middle-age, "
}
else { 
    age = "you are a elderly, " 
}


let inputCity = window.prompt("Please enter your city(only accept A,B,C,D):")
let city =""

    while(inputCity!="A"&& inputCity!="B"&&inputCity!="C"&&inputCity!="D"){
        alert("Please fill in a valid city.",inputCity)
        inputCity = window.prompt("Please enter your city(only accept A,B,C,D):")
        }

switch (inputCity) {
    case "A":
        city = "you live in Downtown, "
        break;

    case "B":
        city = "you live in Suburban, "
        break

    case "C":
        city = "you live in CBD, "
        break

    default:
        city = "you live in village, "
        break
}

let inputPhoneNumber = window.prompt("Please fill in your phone number:")
let phoneNumber = ""

while(isNaN(inputPhoneNumber)==true ||inputPhoneNumber.length != 11){
    alert("Please enter a valid phone number according the instruction.")
    inputPhoneNumber = window.prompt("Please fill in your phone number:")
}

if(inputPhoneNumber.length == 11){
    phoneNumber = "your phone number is valid."
}
else{
    phoneNumber = "your phone number is invalid."
}

alert(gender+age+city+phoneNumber)