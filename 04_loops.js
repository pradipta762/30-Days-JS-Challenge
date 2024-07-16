// Task 1 : WAP to print numbers from 1 to 10 using a for loop.

for(let i = 1; i <= 10; i++) {
    console.log(i)
}

// Task 2 : WAP to print multiplication table of 5 using a for loop.

let num2 = 5
for(let i = 1; i <= 10; i++) {
    console.log(`${num2} * ${i} = ${num2 * i}`)
}

// Task 3 : WAP to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0
let num3 = 1
while(num3 <= 10) {
    sum += ++num3
}
console.log(sum)

// Task 4 : WAP to print numbers from 10 to 1 using a while loop.

let num4 = 10
while(num4 <= 0) {
    console.log(num4)
    num4--
}

// Task 5 : WAP to print numbers from 1 to 5 using a do...while loop.

let  num5 = 1
do {
    console.log(num5)
    num5++
} while(num5 <= 5);

// Task 6 : WAP to calculate the factorial of a number using a do...while loop.

let num6 = 5
let fact = 1

if(num6 > 0) {
    do {
        fact *= num6
        num6--
    } while(num6 > 0);
    console.log(fact)
} else {
    console.log("Factorial of a negative number doesn't exist")
}


// Task 7 : WAP to print the following pattern using nested for loop.
/**
 *         *
 *         * *
 *         * * *
 *         * * * *
 *         * * * * *    
 */

let row = 5
let str

for(let i = 1; i <= row; i++) {
    str = ''
    for(let j = 1; j <= i; j++) {
        str += '*'
    }
    console.log(str)
}