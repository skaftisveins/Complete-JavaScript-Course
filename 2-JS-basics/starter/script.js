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
isMarried = false;

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

