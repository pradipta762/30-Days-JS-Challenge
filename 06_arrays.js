// Task 1 : Create an array of numbers from 1 to 5 and log the array to the console.

let arr1 = [1, 2, 3, 4, 5]
console.log(arr1)

// Task 2 : Access the first and last elements of the array and log them to the console.

let arr2 = [1, 2, 8, 3, 9]
console.log(arr2[0])    // First element of the array
console.log(arr2[arr2.length - 1])  // Last element of the array

// Task 3 : Use the push method to add a new number to the end of the array and log the updated array.

let arr3 = [9, 3, 5, 4, 8]
arr3.push(10)
console.log(arr3)

// Task 4 : Use the pop method to remove the last element from the array and log the updated array.

let removedLastElement = arr3.pop()
console.log(removedLastElement, arr3)

// Task 5 : Use the shift method to remove the first element from the array and log the updated array.

let removedFastElement = arr3.shift()
console.log(removedFastElement, arr3)

// Task 6 : Use the unshift method to add a new number to the beginning of the array and log the updated array.

arr3.unshift(1)
console.log(arr3)

// Task 7 : Use the map method to create a new array where each number is doubled and log the new array.

let arr7 = [1, 8, 3, 9, 7]
let updatedArrayUsingMap = arr7.map((element) => element * 2)
console.log(updatedArrayUsingMap)

// Task 8 : Use the filter method to create a new array with only even numbers and log the new array.

let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let updatedArrayUsingFilter = arr8.filter((element) => element % 2 === 0)
console.log(updatedArrayUsingFilter)

// Task 9 : Use the reduce method to calculate the sum of all the numbers in the array and log the result.

let price = [1200, 2345, 8765, 890]
let finalPrice = price.reduce((prev, curr) => prev + curr)
console.log(finalPrice)

// Task 10 : Use a for loop to iterate over the array and log each element to the console.

for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}

// Task 11 : Use the forEach method to iterate over the array and log each element to the console.

arr1.forEach((element) => console.log(element))

// Task 12 : Create a two-dimensional array (matrix) and log the entire array to the console.

let twoDimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(twoDimensionalArray)

// Task 13 : Access and log a specific element from the two-dimensional array.

console.log(twoDimensionalArray[1][2])