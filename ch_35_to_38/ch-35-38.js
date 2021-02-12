// Assignment # 01
var userVal = ((prompt("Enter a string value")).toLowerCase()).split(" ");
function capitalCase(userValue) {
    
    for (var i = 0; i < userValue.length; i++){
        userValue[i] = userValue[i].charAt(0).toUpperCase()+ userValue[i].slice(1);
    }
   
    return  userValue.join(' ');
    
}
console.log(capitalCase(userVal));


// Assignment # 02
// with Do while loop, following function further can be refined for repeated checking of negative values
function calcFact() {
    var userValue = parseInt(prompt("Please enter a Number to factorialize"));
    if (userValue <= -1) {
        userInput = parseInt(prompt("Factorial of non-negative integers does not exist, Enter a positive value"));
    }
    else if (userValue === 0){
        console.log(`Factorial of 0 is: 1`)
    }
    else {
        var calcFact = 1;
        for (var i = 1; i <= userValue; i++ ) {
            calcFact *= i;
        }
        console.log(calcFact);
    }

}
calcFact();

var value= multiply(4,3,6);

console.log("value", value);   // ```The result is ?```   "36"

function add(a, b){
	var z= a+b;
	return z;
};

function multiply(a, b, c){
	var z= a* add(b, c);
	return z;
};

console.log("course", course);   // ```The result is ?```  "course undefined"
console.log("z", z);   // ```The result is ?```     "z is not defined"

var course="cloud native computing";


// Assingment #03 logic to understand

// on line 19 function multiply is returing value and stoing in variable "value"

// Line 21 code will log the value and display in console which is 36 (4*(3+6))

// Line 33 will log the course value which is declared and initialized after the calling code

// linie 34 will throw an error, z is a local variable with functions add() and multiply() scope
