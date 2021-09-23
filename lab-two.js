
function isLeapYear(year) {
    
    if ((0 == year % 4) && (0 !== year % 100) || (0 == year % 400)) {
        return true;
    } else {
        return false;
    }
}


function century(month) {
    if (Math.trunc(month / 100) == 16) {
        monthCode += 6;
    } else if (Math.trunc(month / 100) == 17) {
        monthCode += 4;
    } else if (Math.trunc(month / 100) == 18) {
        monthCode += 2;
    } else if (Math.trunc(month / 100) == 20) {
        monthCode += 6;
    } else if (Math.trunc(month / 100) == 21) {
        monthCode += 4;
    }

}


function getDayOfTheWeek(year, month, day) {
    var lastTwoDigits = year % 100
    var divident = Math.floor(lastTwoDigits / 12);

    var remainder = lastTwoDigits % 12;

    var NumberOfFours = Math.floor(remainder / 4);

    var monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var addDayOfMonth = day;

    var intArray = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
    var mon = monthOfYear.indexOf(month) + 1;

    var monthCode = intArray[mon - 1];


    if (isLeapYear(year)) {
        if (mon === 1 || mon === 2) {
            monthCode -= 1;
        }
    }

    century(month);

    var total = divident + remainder + NumberOfFours + addDayOfMonth + monthCode;


    var secondRemainder = total % 7;

    var daysOfWeekArray = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    var dayOfTheWeek = daysOfWeekArray[secondRemainder];

    return dayOfTheWeek;


}


function makeCalender() {

    var monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    for (month of monthOfYear) {
        if (month == "January" || month == "March" || month == "May" || month == "July" || month == "August" || month == "October" || month == "December") {
            for (let day = 1; day <= 31; day++) {
                console.log(month + "-" + day + "-2021 is a " + getDayOfTheWeek(2021, month, day));
            }
        }


        if (month == "April" || month == "June" || month == "September" || month == "November") {
            for (let day = 1; day <= 30; day++) {
                console.log(month + "-" + day + "-2021 is a " + getDayOfTheWeek(2021, month, day));
            }
        }


        if (month == "February" && isLeapYear) {
            for (let day = 1; day <= 29; day++) {
                console.log("February-" + day + "-2021 is a " + getDayOfTheWeek(2021, month, day));
            }
        }

        if (month == "February" && !isLeapYear) {
            for (let day = 1; day <= 28; day++) {
                console.log("February-" + day + "-2021 is a " + getDayOfTheWeek(2021, month, day));
            }
        }

    }
}


function inputs() {

    var readline = require("readline-sync");
    var yearInput = readline.question("Enter a year...");
    var monthInput = readline.question("Enter a Month...");
    var dayInput = readline.question("Enter a Day...");


    console.log(yearInput + "-" + monthInput + "-" + dayInput + " is a " + getDayOfTheWeek(yearInput, monthInput, dayInput));

    makeCalender();

}

module.exports = {inputs}




