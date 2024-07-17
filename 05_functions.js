// Task 1 : Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(`${num} is an even number`)
    } else {
        console.log(`${num} is an odd number`)
    }
}

checkEvenOdd(8)

// Task 2 : Write a function to calculate the square of a number and return the result.

function findSquare(num) {
    return num * num
}

console.log(findSquare(5))

// Task 3 : Write a function expression to find the maximun of two numbers and log the result to the console.

function findMaximun(num1, num2) {
    return (num1 > num2) ? num1 : num2
}

console.log(findMaximun(82, 9))

// Task 4 : Write a function expression to concatenate two strings and return the result.

function concatStrings(str1, str2) {
    return str1 + " " + str2
}

console.log(concatStrings("Pradipta", "Dash"))

// Task 5 : Write an arrow function to calculate the sum of two numbers and return the result.

const findSum = (num1, num2) => num1 + num2

console.log(findSum(8, 9))

// Task 6 : Write an arrow function to check if a string contains a specific character and return a boolean value.

const checkCharacter = (string, char) => {
    for(str of string) {
        if(str === char) return true
    }
    return false
}

console.log(checkCharacter("Pradipta", "s"))

// Task 7 : Write a function that takes two parameters and return their product. Provide a default value for the second parameter.

function findProduct(num1, num2 = 9) {
    return num1 * num2
}

console.log(findProduct(4, 8))

// Task 8 : Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function displayMessage(name, age = 21) {
    console.log(`Hello ${name} of age ${age}`)
}

displayMessage("PD")

// Task 9 : Write a higher-order function that takes a function and a number and calls the function that many times.

function greeting(num) {
    console.log("Hello", num)
}

function higherOrderFunction1(func, num) {
    for(let i = 1; i <= num; i++) {
        func(i)
    }
}

higherOrderFunction1(greeting, 4)

// Task 10 : Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function addOne(num) {
    return num + 1
}

function square(num) {
    return num * num
}


function higherOrderFunction2(func1, func2, value) {
    return func2(func1(value))
}

console.log(higherOrderFunction2(addOne, square, 5))