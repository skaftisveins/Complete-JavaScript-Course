// ******* Introduction code
console.log('Hello, World!');

// ******* Variables and datatypes
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(firstName + ' ' + lastName + ' is ' + age + ' years old');
console.log(fullAge);

var job; // undefined variable
console.log(job);

job = 'Teacher';
console.log(job);

var $3years = 3;
var johnMark = 'John and Mark';
console.log($3years);

// ******* Variable Mutation and 
var firstName = 'John';
age = 28;

// Type Coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
// isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation (change value of a variable)
age = 'twenty eight';
job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

// ******* Basic operators
var year, yearJohn, yearMark;
currentYear = 2019
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = currentYear - ageJohn;
yearMark = currentYear - ageMark;

console.log(yearJohn);

console.log(currentYear + 2);
console.log(currentYear * 2);
console.log(currentYear / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// Typeof operator
console.log(typeof johnOlder); // boolean
console.log(typeof ageJohn); // number
console.log(typeof 'Mark is older than John'); // string
var x;
console.log(typeof x); // undefined

// ******* Operator precedence
var now = 2019;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 -6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
// x = x * 2;
x *= 2;
console.log(x);

x += 10;
console.log(x);

// x = x + 1
// x += 1;
x++
console.log(x);

// ******* If / else statements
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon');
}

// Rewrite the challenge-1 

var massMark, massJohn, heightMark, heightJohn;

massMark = 73; // kg
heightMark = 1.79; // meters

massJohn = 82;
heigtJohn = 1.86;

// BMI = mass / height^2 = mass / (height * height)

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heigtJohn * heigtJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s\n');
} else {
    console.log('John\'s BMI is higher than Mark\'s\n');
}

// ******* Boolean logic
var firstName = 'John';
var age = 20;

if (age < 16) {
    console.log(firstName + ' is a boy.');

} else if (age >= 13 && age < 20) { // Between 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + ' is a teenager.');

} else if (age > 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}

// ******* Ternary Operator and Switch statements
var firstName = 'John';
var age = 16;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') 
: console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// if (age >= 18) {
//     var drink = 'beer';
//  } else {
//      var drink = 'juice';
//  }

// Switch statements
var job = 'instructor';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drivers an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beatiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 31;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age > 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

// ******* Truthy and Falsy values and equality operators
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
}

// ************************************************
// ******* Functions ******************************
// ************************************************

function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1984);
var ageMike = calculateAge(1954);
var ageMary = calculateAge(1952);
console.log(ageJohn, ageMike, ageMary);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1984, 'John');
yearsUntilRetirement(1952, 'Mike');
yearsUntilRetirement(1954, 'Mary');

// ******* Function Statements and Expressions










