
var num1= prompt("enter the first number");
var num2= prompt("enter the second");
var a= parseInt(num1);
var b= parseInt(num2);

document.write("Result of QS1 :");

if (a > 0 && b > 0 && a > b) {
    document.write("The larger number is " + a );
  } else if (a > 0 && b > 0 && a < b) {
    document.write("The larger number is " + b);
  } else if (a === b && a > 0 && b > 0) {
    document.write("Both numbers are equal!")
  } else {
      document.write("Please add an integer!");

  }



                                                   
