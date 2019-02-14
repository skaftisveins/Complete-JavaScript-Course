var mark = {
    fullName: 'Mark Miller',
    mass: 85, // kg
    height: 1.89, // meters
    calcBMI: function () {
        this.bmi = this.mass / (this.height * 2);
        return this.bmi;
    }
};

var john = {
    fullName: 'John Smith',
    mass: 76,
    height: 1.76,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * 2);
        return this.bmi;
    }
};

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}