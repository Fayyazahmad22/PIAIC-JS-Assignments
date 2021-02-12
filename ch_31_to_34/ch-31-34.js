
var fullName = prompt("Enter your name");
var dOfBirth = prompt("Enter your day of birth day");
var mOfBirth = prompt("Enter your month of birth day");
var yOfBirth = prompt("Enter your year of birth day");
var dateOfBirth = new Date(`${mOfBirth} ${dOfBirth}, ${yOfBirth}`);

var personDOB = new Date(dateOfBirth);
var currentTime = new Date();

//Converting/adding an offset to get Pakistan Standard time 
var PST = 5 * 60;
currentTime.setMinutes(currentTime.getMinutes() + PST);
alert(currentTime);



var yearsOld = currentTime.getFullYear() - personDOB.getFullYear();
var monthsOld = currentTime.getMonth() - personDOB.getMonth();
var daysOld = currentTime.getDate() - personDOB.getDate()
var hoursOld = currentTime.getHours();
var minutesOld = currentTime.getMinutes();
var secondsOld = currentTime.getSeconds();
 
 
if (daysOld < 0) {
    daysOld = 30 + daysOld;
}
if (monthsOld < 0) {
    yearsOld--;
    monthsOld = 12 + monthsOld;
}


var currentTime = new Date();
var currentHour = currentTime.getHours();

if (currentHour >= 0 && currentHour < 12 ) {
    console.log(`Hello ${fullName} Good morning`);
}
else if (currentHour >= 12 && currentHour < 16 ) {
    console.log(`Hello ${fullName} Good afternoon`);
}
else if (currentHour >= 16 && currentHour < 21) {
    console.log(`Hello ${fullName} Good Evening`);
}
else  {
    console.log(`Hello ${fullName} Good Night`);
}

console.log(`You are ${yearsOld} Years ${monthsOld} Months ${daysOld} Days ${hoursOld} Hours ${minutesOld} Minutes ${secondsOld} Seconds old`);

var ageInMS = currentTime.getTime() - personDOB.getTime();
var ageInDays = Math.floor(ageInMS / (1000*60*60*24));
console.log(`Your Age in Days is ${ageInDays}`);


var remainingMonths = 12 - monthsOld;
var remainingDays = 30 - daysOld;
var remainingHours = 24 - currentTime.getHours();
var remainingMinutes = 60 - currentTime.getMinutes();
var remainingSeconds = 60- currentTime.getSeconds();

if ((currentTime.getMonth() === personDOB.getMonth()) && (currentTime.getDate() === personDOB.getDate())) {
    console.log(`Happy Birth Day ${fullName}. Today is Your ${yearsOld}th Birth Day`)
}
else {
    console.log(`There are ${remainingMonths} months ${remainingDays} days ${remainingHours} Hours ${remainingMinutes} minutes and ${remainingSeconds} left in your next birthday`);
}


