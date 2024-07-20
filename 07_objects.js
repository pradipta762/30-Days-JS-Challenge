// Task 1 : Create an object representing a book with properties like title, author, ana year, and log the object to the console.

let book = {
    title : 'The Hidden Hindu',
    author : 'Akshat Gupta',
    year : 2023
}

console.log(book)

// Task 2 : Access and log the title and author properties of the book object.

console.log(book.title, book.author)
console.log(book["title"], book["author"])

// Task 3 : Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

book.bookDetails = function() {
    console.log(`${this.title} : ${this.author}`)
}

console.log(book.bookDetails())

// Task 4 : Add a method to the book object that takes a parameter(year) and updates the book's year property, then log the updated object.

book.updateYear = function(year) {
    this.year = year
}

book.updateYear(2022)
console.log(book)

// Task 5 : Create a nested object representing a library with properties like name and books(an array of book objects), and log the library object to the console.

let library = {
    name : "PD's Library",
    books : [
        {
            title : "The Cocktail Of Love",
            pages : 232,
            paperbackAvailable : true,
            year : 2020
        },
        {
            title : "The Hidden Hindu",
            pages : 190,
            paperbackAvailable : false,
            year : 2020
        },
        {
            title : "Programming in C++",
            pages : 796,
            paperbackAvailable : true,
            year : 2003
        }
    ]
}

console.log(library)

// Task 6 : Access and log the name of the library and the titles of all the books in the library.

console.log(library["name"])
for(let i = 0; i < library.books.length; i++) {
    console.log(library.books[i].title)
}

// Task 7 : Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

book.displayResult = function() {
    return `${this.title} is released in ${this.year}`
}

// Task 8 : Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for(let key in book) {
    console.log(key, book[key])
}

// Task 9 : Use Object...keys and Object.values method to log all the keys and values of the book object.

console.log(Object.keys(book))
console.log(Object.values(book))