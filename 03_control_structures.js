// Task 1 : WAP to check if a number is positive, negative, or zero, and log the result to the console.

let num = 23
if(num > 0) {
    console.log(`${num} is positive`)
} else if(num < 0) {
    console.log(`${num} is negative`)
} else {
    console.log(`Entered number is zero`)
}

// Task 2 : WAP to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 45
if(age >= 18) {
    console.log("You are eligible to vote")
} else {
    console.log("Sorry ! You are not eligible to vote")
}

// Task 3 : WAP to find the largest of three numbers using nested if-else statement

let num1 = 4
let num2 = 8
let num3 = 2
let largest;

if(num1 > num2) {
    if(num1 > num3) {
        largest = num1
    } else {
        largest = num3
    }
} else {
    if(num2 > num3) {
        largest = num2
    } else {
        largest = num3
    }
}

console.log(largest)

// Task 4 : WAP that uses a switch case to determine the day of the week based on a number (1 - 7) and log the day name to the console.

let day = 6

switch(day) {
    case 1: 
        console.log("Monday")
        break;
    case 2: 
        console.log("Tuesday")
        break;
    case 3: 
        console.log("Wednesday")
        break;
    case 4: 
        console.log("Thursday")
        break;
    case 5: 
        console.log("Friday")
        break;
    case 6: 
        console.log("Saturday")
        break;
    case 7: 
        console.log("Sunday")
        break;
    default:
        console.log("Sorry ! Enter a valid number")
}

// Task 5 : WAP that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let mark = 89
switch(true) {
    case mark >= 90:
        console.log("A")
        break;
    case mark >= 80:
        console.log("B")
        break;
    case mark >= 60:
        console.log("C")
        break;
    case mark >= 40:
        console.log("D")
        break;
    case mark <= 33:
        console.log("F")
        break;
    default:
        console.log("Please enter valid mark")
}

// Task 6 : WAP that uses the ternary operator to check if a number is even or odd and log the result to the console.

let number = 98

console.log((number % 2 === 0) ? "Even" : "Odd")

// Task 7 : WAP to check if a year is a leap year using multiple conditions (Divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2004

if(year % 4 === 0) {
    if(year % 400 === 0 || year % 100 !== 0) {
        console.log(`${year} is a leap year`)
    } else {
        console.log(`${year} is not a leap year`)
    }
} else {
    console.log(`${year} is not a leap year`)
}