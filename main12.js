alert ("moving to exercice 12 :) ");
var sum = 0;
document.write("Result of QS12 :");
for (var x = 0; x < 30 ; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
document.write(sum +" ");