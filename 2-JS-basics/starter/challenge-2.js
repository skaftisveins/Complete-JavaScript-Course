var scoreJohn, scoreMike, scoreMary, averageJohn, averageMike, averageMary;

scoreJohn = (116 + 94 + 123) / 3; // points
scoreMike = (116 + 94 + 123) / 3;
scoreMary = (116 + 94 + 123) / 3;

console.log(scoreJohn);
console.log(scoreMike);
console.log(scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('Mike\s team wins on average with a total score of: ' + scoreJohn);

} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('John\s team wins on average with a total score of: ' + scoreMike)

} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\s team wins on average with a total score of: ' + scoreMary)

} else {
    console.log('All teams have the exact same score!');
}

switch (true) {
    case scoreMary > (scoreJohn && scoreMike):
        console.log('Mary\s team wins on average with a total score of: ' + scoreMary);
        break;

    case scoreJohn > (scoreMary && scoreMike):
        console.log('John\s team wins on average with a total score of: ' + scoreJohn);
        break;

    case scoreMike > (scoreMary && scoreJohn):
        console.log('Mike\s team wins on average with a total score of: ' + scoreMike);
        break;

    default:
        console.log('All teams have the exact same score!');
}
