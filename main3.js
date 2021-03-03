alert ("moving to exercice 3 :) ");


var num1= 0;
var num2=-1;
var num3= 4;

document.write("Result of QS3 :");
if (num1>num2 && num1>num3)
{
if (num2>num3)
{
alert(num1 + ", " + num2 + ", " +num3);
document.write(num1 + ", " + num2 + ", " +num3);
}
else
{
    alert(num1 + ", " + num2 + ", " +num3);
document.write(num1 + ", " + num2 + ", " +num3);
}
}
else if (num2>num1 && num2 >num3)
{
if (num1>num3)
{
    alert(num2 + ", " + num1 + ", " +num3);
document.write(num2 + ", " + num1 + ", " +num3);
}
else
{
    alert(num2 + ", " + num3 + ", " +num1);
document.write(num2 + ", " + num3 + ", " +num1);
}
}
else if (num3>num1 && num3>num2)
{
if (num1>num2)
{
    alert(num3 + ", " + num1 + ", " +num2);
document.write(num3 + ", " + num1 + ", " +num2);
}
else
{
    alert(num3 + ", " + num2 + ", " +num1);
document.write(num3 + ", " + num2 + ", " +num1);
}
}