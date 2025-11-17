"use strict";
// array, object
Object.defineProperty(exports, "__esModule", { value: true });
let myItem = ["aa", "bb", "cc"];
myItem.push("dd");
console.log(myItem);
// let myWife: (string | number | boolean)[]
let myWife = ["dd", 233, "ff", true];
myWife.push(true);
console.log(myWife);
/// tuple type
// It's a type that has a fixed number of elements, and each element has a fixed type.
let myNameRoll = ["name", 123];
console.log(myNameRoll);
// object 
const user = {
    firstName: 'Mohammed',
    middleName: 'Ashikur',
    lastName: 'Rahaman',
};
console.log(user);
// Giving optional property if middle part is empty
const user2 = {
    firstName: 'Mohammed',
    // middleName: '',
    lastName: 'Rahaman',
};
console.log(user2);
//# sourceMappingURL=03_non_primitive.js.map