//JavaScript Refresher

// let & const
let myName = 'Max';
console.log(myName);

myName = 'Menu'
console.log(myName)

// Arrow functions
function printMyName(name) {
    console.log(name)
}
printMyName('Max')

const printMyNameArrow = (name) => {
    console.log(name)
}

printMyNameArrow('Peru')
const printMyNameArrow2 = (number, name) => {
    console.log(number, name)
}

printMyNameArrow2(28, 'Peru')
const multiply = number => number * 2;
console.log(multiply(2))

// Exports and Imports

// person.js
// const person = {
//     name: 'Max'
// }
// export default person; // imports default and ONLY export of the file Name in the receiving file is up to you

// utility.js
// export const clean = () => { };
// export const baseData = 10;


// //import by name is in curly
// import { baseData } from './ utility.js'
// import { clean } from './ utility.js'

// by using default export we are able to choose are own names example:
// import person from './person.js'
// // or
// import prs fomr './person.js'

// when we do import named export it is defined by export
//     import { smth } from './utility.js'
//     import { smth as Smth } from './utility.js'
// //     import * as bundled from './utility.js' => import everything from that file

// // Classes

// class Human {
//     constructor() {
//         this.gender = 'male';
//         this.gender = 'female';
//     }
//     printGender() {
//         console.log(this.gender)
//     }

// }
// class Person extends Human {
//     constructor() {
//         super()
//         this.name = 'Max';
//     }
//     printMyName() {
//         console.log(this.name)
//     }

// }
// const person = new Person();
// person.printMyName();
// person.printGender();


// // Classes, Properties & Methods

// // Spread & Rest Operators 
// // ...

// // -- SPREAD ---
// // Used to split up array elements or object properties
// const newArray = [...oldArray, 1, 2];
// const newObject = { ...oldObject, newProp: 5 }

// // --REST--
// // Used to merge a list of function arguments into an array
// function sortArgs(...args) {
//     return args.sort();
// }

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4];
// console.log(newNumbers)
// const person = {
//     name: 'Max'
// }
// const newPerson = {
//     ...person,
// //     age: 28
// // }
// // console.log(newPerson);

// // const filter = (...args) => {
// //     return args.filter(el => el === 1);
// // }
// // console.log(filter(1, 2, 3));

// // Destructing
// // Easily extract array elements or object properties and store them in variables
// // Array Destructuring
// let [a, b] = ['Hello', 'Max'];
// console.log(a)
// console.log(b)
// // Object Destructuring
// let { name, age } = {
//     name: 'Max',
//     age: 28
// }
// console.log(name)
// console.log(age)

// const numbers = [1, 2, 3];
// [num1, , num3] = numbers;
// console.log(num1, num3)


// // Reference and Primitive Types

// const person = {
//     name: 'Max'
// }
// const secondPerson = {
//     ...person
// }

// secondPerson.name = 'Manu';
// console.log(secondPerson);

// Array Functions

const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num) => {
    return num * 2;
})
console.log(numbers);
console.log(doubleNumArray);