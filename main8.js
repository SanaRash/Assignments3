alert ("moving to exercice 8 :) ");

document.write("Result of QS8 :");

function happy(number) {
    var m, digit ;
    var cycle = [] ;
 
    while(number != 1 && cycle[number] !== true) {
        cycle[number] = true ;
        m = 0 ;
        while (number > 0) {
            digit = number % 10 ;
            m += digit * digit ;
            number = (number  - digit) / 10 ;
        }
        number = m ;
    }
    return (number == 1) ;
}
 
var cnt = 5 ;
var number = 1 ;
 document.write("happy numbers ")
while(cnt-- > 0) {
    while(!happy(number))
        number++ ;
    document.write(number + " ") ;
    number++ ;
}