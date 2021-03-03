alert ("moving to exercice 13 :) ");


function promptNumber( text)
{
    if(text == '' ){
     text = "Please enter a number ";   
    }
    var number = parseInt(window.prompt(text, ""));
    checkNumber(number);
    var number2 =parseInt (window.prompt(text, ""));
    checkNumber2(number2);
    var totalMark = number + number2;

}

 function checkNumber(number)
{
    if ( number > 1) {
    document.write("Your number (" + number + ")  matches requirements", "");
} else if (isNaN(number)) {
    promptForNumber("It is not a number. Please enter a valid number");
} else {
    promptForNumber("Your number (" + number + ") should not be less then 1");
}
}
 
function checkNumber2(number2){
    
    if (number2 <= 100 && number2 >= 1) {
    document.write("Your number (" + number2 + ")  matches requirements", "");
} else if (isNaN(number2)) {
    promptForNumber("It is not a number. Please enter a number from 1 to 100", "");
} else {
    promptForNumber("Your number (" + number2 + ") is not between 1 and 100", "");
} 
}
  
function grade (per)
{
    per = percentag(total_marks,number);
    if (per > 80){
        document.write(" YOUR MARKS ARE A+");
        }
        else if (per > 70) {
        document.write(" YOUR MARKS ARE B+");
        }
        else if (per > 50)
        {
        document.write("YOUR MARKS ARE c");
        }

}

 function percentage (total_marks,number)
 {let  total_marks = number + number2; 
    let percentage; 
    System.out.println("Total Marks : " + total_marks); 
    percentage = number / total_marks* 100 
    System.out.println(  "Total Percentage : " + percentage + "%"); 

 }

