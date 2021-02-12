// Task-01
var courses= [];

// Task-02
courses.push(prompt("Enter Course # 01 Name"));

courses.push(prompt("Enter Course # 02 Name"));

courses.push(prompt("Enter Course # 03 Name"));

courses.push(prompt("Enter Course # 04 Name"));

courses.push(prompt("Enter Course # 05 Name"));

// Task-03

alert("Course # 01 is: " + courses[0])

alert("Course # 02 is: " + courses[1])

alert("Course # 03 is: " + courses[2])

alert("Course # 04 is: " + courses[3])

alert("Course # 05 is: " + courses[4])

// Task-04 and 5

courses.splice(0, 1, prompt(`Course # 01 is ${courses[0]}, enter new course name`, courses[0]));

courses.splice(1, 1, prompt(`Course # 02 is ${courses[1]}, enter new course name`, courses[1]));

courses.splice(2, 1,  prompt(`Course # 03 is ${courses[2]}, enter new course name`, courses[2]));

courses.splice(3, 1, prompt(`Course # 04 is ${courses[3]}, enter new course name`, courses[3]));

courses.splice(4, 1,  prompt(`Course # 05 is ${courses[4]}, enter new course name`, courses[4]));

// Task-06

alert("Course # 01 is: " + courses[0])

alert("Course # 02 is: " + courses[1])

alert("Course # 03 is: " + courses[2])

alert("Course # 04 is: " + courses[3])

alert("Course # 05 is: " + courses[4])
