var Mark = {
    fullName: 'Mark',
    mass: 85, // kg
    height: 1.89, // meters
    calcBMI: function () {
        this.mass / (this.height * 2);

        return this;
    }
};

var John = {
    fullName: 'John',
    mass: 76,
    height: 1.76
};

Mark.calcBMI();
console.log(Mark);