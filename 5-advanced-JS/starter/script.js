// OBJECTS AND FUNCTIONS

// // Function constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var darksouls = {
//         name: 'Dark Souls',
//         releaseDate: 'August 2012',
//         type: 'Third-person action role-playing game'
// };

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// var Developer = function(name, releaseDate, type) {
//         this.name = name;
//         this.releaseDate = releaseDate;
//         this.type = type;
// }

// Person.prototype.calculateAge = function() {
//         console.log(2019 - this.yearOfBirth);
// };


// Person.prototype.lastName = 'Smith';
// Developer.prototype.publisher = 'Namco Bandai Games JP: FromSoftware';

// var john = new Person('John', 1990, 'teacher'); // brand new empty object 
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// var darksouls = new Developer('Dark Souls', 'August 2012t', 'Third-person action role-playing game');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);
// console.log(darksouls.publisher);

// Object.create

// var personProto = {
//         calculateAge: function() {
//                 console.log(2019 - this.yearOfBirth);
//         }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto,
//         {
//                 name: {value: 'Jane' },
//                 yearOfBirth: {value: 1969 },
//                 job: {value: 'designer' }
//         });

// Primitives vs objects

// Primitives
var a = 23;
var b = a; // 23
a = 46; // Mutate 
console.log(a);
console.log(b);


// Objects
var obj1 = {
        name: 'John',
        age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); // 30
console.log(obj2.age); // 30

// Functions
var age = 27;
var obj = {
        name: 'Jonas',
        city: 'Lisbon'
};

function change(a, b) {
        a = 30;
        b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);

// First class Function - passing functions as arguments

var years = [1984, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
        var arrRes = [];
        for (var i = 0; i < arr.length; i++) {
                arrRes.push(fn(arr[i]));
        }
        return arrRes;
}

function calculateAge(el) {
        return 2019 - el;
}

function isFullAge(el) {
        return el >= 18;
}

function maxHeartRate(el) {
        if (el >= 18 && el <= 81) {
                return Math.round(206.9 - (0.67 * el));
        } else {
                return -1;
        }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

// First class functions - returning functions

function interviewQuestion(job) {
        if (job === 'designer') {
                return function(name) {
                        console.log(name + ', can you please explain what UX design is?');
                }
        } else if (job === 'teacher') {
                return function(name) {
                        console.log('What subject do you teach ' + name + '?'); 
                }
        } else {
                return function(name) {
                        console.log('Hello ' + name + ',what do you do?');
                }
        }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');

// IIFE Immediately Invoked Function Expressions

// function game() {
//         var score = Math.random() * 10;
//         console.log(score >= 5);
// }
// game();

(function () {
        var score = Math.random() * 10;
        console.log(score >= 5);   
})();

(function (goodluck) {
        var score = Math.random() * 10;
        console.log(score >= 5 - goodluck);   
})(5);

// Closures

function retirement(retirementAge) {
        var a = ' years left until retirement';
        return function(yearOfBirth) {
                var age = 2019 - yearOfBirth;
                console.log((retirementAge - age) + a);
        }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1984);
retirementGermany(1984);
retirementIceland(1984);

retirement(66)(1990);

function interviewQuestion(job) {
        return function(name) {
                if (job === 'designer') {
                        console.log(name + ', can you please explain what UX design is?');
                } else if (job === 'teacher') {
                        console.log('What subject do you teach ' + name + '?'); 
                } else {
                        console.log('Hello ' + name + ',what do you do?');
                }

        }
}

interviewQuestion('designer')('Mark');

// Bind, call and apply

var john = {
        name: 'John',
        age: 26,
        job: 'teacher',
        presentation: function(style, timeOfDay) {
        if (style === 'formal') {
                console.log(`Good ${timeOfDay}, ladies and gentlemen! I'm ${this.name}. I'm a ${this.job} and I'm ${this.age} years old.`);
        } else if (style === 'friendly') {
                console.log(`Hey! What's up? I'm ${this.name}. I'm a ${this.job} and I'm ${this.age} years old. Have a nice ${timeOfDay}.`);
        }
        }
};

var emily = {
        name: 'Emily',
        age: 35,
        job: 'designer'
};

john.presentation('formal', 'morning');
john.presentation('friendly', 'evening');

john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.apply(emily, 'friendly', 'afternoon');

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');




var years = [1984, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
        var arrRes = [];
        for (var i = 0; i < arr.length; i++) {
                arrRes.push(fn(arr[i]));
        }
        return arrRes;
}

function calculateAge(el) {
        return 2019 - el;
}

function isFullAge(limit, el) {
        return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);