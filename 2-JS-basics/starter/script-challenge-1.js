var massMark, massJohn, heightMark, heightJohn;

massMark = 73; // kg
heightMark = 1.79; // meters

massJohn = 82;
heigtJohn = 1.86;

// BMI = mass / height^2 = mass / (height * height)

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heigtJohn * heigtJohn);

console.log('Mark\'s BMI:' + BMIMark);
console.log('John\'s BMI:' + BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s?\n' + markHigherBMI);
