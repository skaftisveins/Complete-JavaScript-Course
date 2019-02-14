var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        
        // Empty arrays
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) { // bills array from object and then the length of the array
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i]; // current bill and the current value

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            // Add result to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + (bill * percentage);
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 375, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {

            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + (bill * percentage);
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
// [2, 6, 4] -> 0 / 2 / 8 / 12

// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\s family pays higher tips, with an average of $' + mark.average);
} else {
    console.log('Both families pay equally high amount of tips');
}






