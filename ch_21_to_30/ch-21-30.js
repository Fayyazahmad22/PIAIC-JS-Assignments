var userInput = parseFloat(prompt("Please enter a number"));

var inputround = Math.floor(userInput);

var userStr = "This is dummy text";

var slicedStr = userStr.slice(0, inputround);
var revStr = [''];
for (var i = slicedStr.length ; i >= 0; i-- ) {
    revStr += slicedStr[i];
}
alert(revStr);


// Second Assignment

var userIn = ((prompt("Enter a string value")).toLowerCase()).split(" ");
for (var i = 0; i < userIn.length; i++){
    userIn[i] = userIn[i].charAt(0).toUpperCase()+ userIn[i].slice(1);
}

console.log(userIn.join(' '));
