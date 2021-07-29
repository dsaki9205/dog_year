//My age
myAge = 28
// creating early year variable
let earlyYear = 2;
//multiply early year by 10.5
earlyYear *= 10.5;

laterYears = myAge - earlyYear;
laterYears *= 4;
console.log(laterYears);
console.log(earlyYear);
//adding earlyYear and laterYears to get my age in dog years
myAgeInDogYears = earlyYear + laterYears;
//creating my name with lower case name
let myName = "Sakib".toLowerCase();

//printing out the statement
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)