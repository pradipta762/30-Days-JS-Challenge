// Task 1 : Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let name = 'Pradipta'
let age = 21

let str1 = `${name}'s age is ${age}`
console.log(str1)

// Task 2 : Create a multi-line string using template literals and log it to the console.

let str2 = `This is line 1
This is line 2
`

console.log(str2)

// Task 3 : Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let arr = [1, 2, 3, 4, 5]
const[a, b] = arr
console.log(a, b)

// Task 4 : Use object destructuring to extract the title and author from a book object and log them to the console.

let book = {
    title : 'The Hidden Hindu',
    author : 'Akshat Gupta',
    year : 2023
}

const{title, author} = book
console.log(title, author)

// Task 5 : Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let arr5 = [1, 2, 3, 4, 5, 6, 7]
let newArray = [...arr5, 8, 9, 10]
console.log(newArray)

// Task 6 : Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...arguments) {
    let sum = 0
    for(let arg of arguments) {
        sum += arg
    }
    return sum
}

console.log(sum(1, 2, 3, 4, 5))

// Task 7 : Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function product(num1, num2 = 1) {
    return num1 * num2
}

console.log(product(2, 3))
console.log(product(2))

// Task 8 : Use enhanced object literals to create an object with methods and properties, and log the object to the console.

let userName = "Pradipta"
let email = "pradipta@example.com"
let isLoggedIn = true
let showMessage = () => {console.log(`Hello ${userName}, welcome to the company`)}

let user = {
    userName,
    email,
    isLoggedIn,
    showMessage
}

console.log(user)
user.showMessage()

// Task 9 : Create an object with computed property names based on variables and log the object to the console.

let key1 = 'name'
let key2 = 'age'

let person = {
    [key1] : 'Pradipta',
    [key2] : 22
}

console.log(person)