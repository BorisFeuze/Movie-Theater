
//Variables Exercise

let age = 25;
console.log('Age: ', age);
const birthYear = 1999;
console.log('Birthyear: ', birthYear);
let name = 'John Doe: ';
console.log('Name: ', name);
const isStudent = true;
console.log('Student: ', isStudent);

let favoriteColor = 'blue';
console.log('Favorite Color: ', favoriteColor);

favoriteColor = 'green';
console.log('New Favorite Color: ', favoriteColor);


//Arithmetic Exercise

let number = 6;
let strnumber = '3';

let result = number * strnumber;

console.log(result);

// 6+3 = 9

// 6-3 = 3

let a = 9;
let b = 2;

let mresult = a % b;

console.log(mresult);

let mnumber = 6;

let cresult = a % mnumber;

console.log(cresult)

let c = 5
let d = 2
let e = 3

let plus = c + d + e;
console.log(plus)

let minus = c - d - e;
console.log(minus)

let mal = c * d * e;
console.log(mal)

let geteilt = c / d / e;
console.log(geteilt)

let modulus = c % d % e;
console.log(modulus)


//Comparisons

// You can work here or download the template!
// Strict vs Simple Equality and Inequality
console.log('5 == "5": ', 5 == '5'); // Simple Equality, should be true
console.log('5 === "5": ', 5 === '5'); // Strict Equality, should be false

//simple equality
console.log(11 == '11');
//strict equality
console.log(11 === '11');
//simple inequality
console.log(1 != '1')
//strict inequality
console.log(1 !== '1')
//less then or equal
console.log(6 <= 7)
//greater then or equal
console.log(6 > 2)
//inequality simple
console.log(5 != '5')
//strict equality
console.log(5 !== '5')
//simple inequality
console.log(10 != '10')
//strict inequality
console.log(10 !== '10')
//greater then
console.log(5 > 3)
//less then
console.log(10 < 20)
//less then
console.log('10' < '20')
//greater then and equal
console.log(5 >= 5)
//greater then and equal
console.log('5' >= '5')
//less then and equal
console.log(10 <= 20)
//less then and equal
console.log('10'<= '20')


//Conditionals

let temperature = 20;

if (temperature < 15) {
    console.log("Advise wearing for a coat");
} else {
    console.log("You dont have to wear a Jacket")
}

let degrees = 18;

if (degrees < 15)
    console.log("Wear a coat")
else if (degrees >= 15 && degrees <= 25)
    console.log("Wear a sweater")
else {
    console.log("Wear a t-shirt")
}

switch (degrees) {
    case 10:
        console.log("Very cold wear a sweater");
    break
    case 20:
        console.log("Wear a long sleecve");
    break
    default:
        console.log("Check the weather");
}

//Functions

