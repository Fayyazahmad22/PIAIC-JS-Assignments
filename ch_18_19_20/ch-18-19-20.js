//Task-01
var courses = [];

//Task-02
for (var i = 1; i <=5; i++) {
    courses.push(prompt("Please enter course #" + i + " name:"));
}

//Task -03
for (var i = 0; i < courses.length; i++) {
    alert("Course #" + (i+1) + " name is: " + courses[i]);
}

//Task-04 and Task-05 prompt, and editing the course
for (var i = 0; i < courses.length; i++) {
    var newCourse= prompt(`Course # ${i+1} is " ${courses[i]} ",  enter new course`, courses[i]);
    courses.splice(i, 1, newCourse);
}

//Task-05
for (var i = 0; i < courses.length; i++) {
    alert("Updated course # " + (i+1) + " name is: " + courses[i]);
}
