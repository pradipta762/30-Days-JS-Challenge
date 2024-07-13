// Task 1 : Declare a variable using var, assign it a number, and log the value to the console.

var num = 55
console.log(num)

// Task 2 : Declare a variable using let, assign it a string, and log the value to the console.

let userName = 'Pradipta'
console.log(userName)

// Task 3 : Declare a variable using const, assign it a boolean value, and log the value to the console.

const isLoggedIn = true
console.log(isLoggedIn)

// Task 4 : Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator

let age = 21
let email = 'example@gmail.com'
let isActive = false
let address = {
    street : 'Nayahat',
    post : 'Nayahat',
    district : 'Puri',
    state : 'Odisha',
    country : 'India'
}
let numArr = [1, 2, 3, 4, 5]

console.log(typeof age)
console.log(typeof email)
console.log(typeof isActive)
console.log(typeof address)
console.log(typeof numArr)

// Task 5 : Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let userId = 1234
console.log(userId)

userId = 6789
console.log(userId)

// Task 6 : Try reassigning a variable declared with const and observe the error

const value = 90
console.log(value)

value = 78
console.log(value)      // can't assign to the const variable




/**
 * Feature Request : 
 * 1. Variable Types Console Log : Write a script that declares variable of different data types and logs both the value and type of each variable to the console.
 * 2. Reassigning Demo : Create a script that demonstrates the different in behaviour between let and const when it comes to reassignment.
 */

// Feature request 1 : 

let mark = 99
let seatNumber = '23R'
let isPresent = true
let variable1 = null
let variable2 = undefined

console.log(mark, typeof mark)
console.log(seatNumber, typeof seatNumber)
console.log(isPresent, typeof isPresent)
console.log(variable1, typeof variable1)
console.log(variable2, typeof variable2)

// Feature request 2 : 

let var1 = 12
var1 = 45           // Here we can reassign the variable that is declared with let

const var2 = 90
var2 = 99           // But, we can't reassign the variable that is declared with const