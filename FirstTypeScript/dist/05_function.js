"use strict";
// function
// arrow function, normal function
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
// console.log(add(1, '33'))  // Will give error
console.log(add(1, 55));
const arrowAdd = (a, b) => {
    return a + b;
};
console.log(arrowAdd(1, 55));
// Object => function => Method
const user = {
    name: 'Rifat',
    baseSalary: 100,
    getSalary(value) {
        return this.baseSalary + value + value * 0.5;
    }
};
let x = user.getSalary(50);
console.log(x);
// map
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrSquare = arr.map((item) => item * item);
console.log(arrSquare);
//# sourceMappingURL=05_function.js.map