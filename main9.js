alert ("moving to exercice 9 :) ");


document.write("Result of QS9 :");
document.write("armstrong numbers ");
for (i = 100; i <= 999; i++) {

    // converting number to string 
    let numberOfDigits = i.toString().length;

    let sum = 0;

    // create a temporary variable
   let temp = i;

    /* loop through a number to find if 
    a number is an Armstrong number */
    while (temp > 0) {

        var remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        // removing last digit from the number
        temp = parseInt(temp / 10) 
        // convert float into integer
    }
 
    if (sum == i) {

        document.write(" " + i +" ");
    }
}
