var course1 = Number(prompt("Enter course 1 obtained marks"));
var course2 = Number(prompt("Enter course 2 obtained marks"));
var course3 = Number(prompt("Enter course 3 obtained marks"));
var course4 = Number(prompt("Enter course 4 obtained marks"));
var course5 = Number(prompt("Enter course 5 obtained marks"));

var obtainedMarks = course1 + course2 + course3 + course4 + course5;

var percentage = (obtainedMarks / 500) * 100;
alert("Your Percentage is " + percentage); 

