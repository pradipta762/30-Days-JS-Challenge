/**
 * Activity 1 : Arithmetic Operations
 */

let num1 = 23
let num2 = 89

// Task 1 : Write a program to add two number and log the results to the console
let addition = num1 + num2
console.log(addition)

// Task 2 : Write a program to subtract two number and log the results to the console
let subtraction = num2 - num1
console.log(subtraction)

// Task 3 : WAP to multiply two number and log the results to the console
let multiplication = num1 * num2
console.log(multiplication)

// Task 4 : WAP to divide two number and log the results to the console
let division = num1 / num2
console.log(division)

// Task 5 : WAP to find the remainder when one number is divided by another and log the result to the console
let remainder = num1 % num2
console.log(remainder)


/**
 * Activity 2 : Assignment Operations
 */

// Task 6 : Use the += operator to add a number to a variable and log the result to the console.
num1 += 6
console.log(num1)

// Task 6 : Use the -= operator to subtract a number from a variable and log the result to the console.
num2 -= 2
console.log(num2)

/**
 * Activity 3 : Comparison Operations
 */

// Task 8 : WAP to compare two numbers using > and < and log the result to the console.
console.log(8 > 9)
console.log(11 < 15)

// Task 9 : WAP to compare two numbers using >= and <= and log the result to the console.
console.log(12 >= 12)
console.log(1 <= 9)

// Task 10 : WAP to compare two numbers using == and === and log the result to the console.
console.log(2 == '2')
console.log(2 === '2')


/**
 * Activity 4 : Logical Operations
 */

// Task 11 : WAP that uses the && operator to combine two conditions and log the result to the console.
let age = 21
console.log(age > 18 && age < 60)

// Task 11 : WAP that uses the || operator to combine two conditions and log the result to the console.
console.log(age > 18 || age < 60)

// Task 11 : WAP that uses the ! operator to negate a condition and log the result to the console.
console.log(!(age < 18))


/**
 * Activity 5 : Ternary Operations
 */

// Task 14 : WAP that uses the teranary operator to check if a number is positive or negative and log the result to the console.
let number = 12
console.log((number > 0) ? "Positive" : "Negative")