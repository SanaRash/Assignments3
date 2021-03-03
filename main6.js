alert ("moving to exercice 6 :) ");

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
var total = 0;

document.write("Result of QS6 :");

for (var i=0; i < students.length; i++) {
    total += students[i][1];
var avg = (total/students.length);
}

document.write("Average grade: " + (total/students.length));

if (avg < 60){
document.write(" Grade : F");
}
else if (avg < 70) {
document.write(" Grade : D");
}
else if (avg < 80)
{
document.write(" Grade : C");
} else if (avg < 90) {
document.write(" Grade : B");
} else if (avg < 100) {
document.write(" Grade : A");
}