alert ("moving to exercice 11 :) ");
alert(" compute the greatest common divisor (GCD)");

var num1= prompt("enter the first number");
var num2= prompt("enter the second");
var a= parseInt(num1);
var b= parseInt(num2);


var gcd;

document.write("Result of QS11 :");

while (a!=b)
{
	if (a>b)
	{
		a = a -b;
	}
	else
	{
		b = b - a;
	}
}

gcd = a;
document.write(gcd +" ");
