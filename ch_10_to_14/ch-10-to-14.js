

var number1 = parseFloat(prompt('Enter first number: '));
var number2 = parseFloat(prompt('Enter second number: '));
var operator = prompt('Enter operator ( either +, -, *, / or % ): ');
var result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else if (operator == "/") {
    result = number1 / number2;
}
else if (operator == "%") {
    result = number1 % number2;
}
else {
    alert("please enter Math operators ( either +, -, *, / or %) ")

}


alert("Result of " + number1 + " " + operator + " " + number2 + " is: " + result);
