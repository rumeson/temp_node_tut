// If we have a function inside of a module that we invoke, that code will run even when it is
// not assigned to a variable

const num1 = 15
const num2 = 20

function addValues() {
    console.log(`The sum is : ${num1 + num2}`)
}

addValues()