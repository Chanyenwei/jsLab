var currentMonth = window.prompt ("Please enter a month: ")
// this line is to take user input or place to type input
var text = " Now is "

switch(parseInt(currentMonth)){  //parse=  convert 换
    case 0 : //0 is 条件(condition) and also called input
        text += "January"
        break

    case 1 :
        text += "February"
        break

    case 2 :
        text += "March"
        break

    case 3 : 
        text += "April"
        break

    case 4 :
        text += "May"
        break

    case 5 :
        text += "June"
        break

    case 6 :
        text += "July"
        break

    case 7 :
        text += "August"
        break

    case 8 :
        text += "September"
        break

    case 9 :
        text += "October"
        break

    case 10 :
        text += "November"
        break

    case 11 :
        text += "December"

    default :
        text += "not a month"

}

alert(text)