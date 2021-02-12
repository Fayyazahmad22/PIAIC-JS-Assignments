var flag = 1;
var totalScore = 0
while(flag <= 5) {
   totalScore += parseFloat(prompt(`Please enter Course # ${flag} score`));
    flag++
} 
var percentage = (totalScore / 500 ) * 100;


switch(true) {
    case percentage >= 90: 
        alert("A+ Grade");
        break;
    case percentage >=75 && percentage <90 :
        alert("A Grade");
        break;
    case percentage >=60 && percentage <75 :
        alert("B Grade");
        break;
    case percentage >=45 && percentage <60 :
        alert("C Grade");
        break;
    case percentage >=30 && percentage <45 :
        alert("D Grade");
        break;
    case percentage >=0 && percentage <30:
        alert("F Grade");
        break;
}