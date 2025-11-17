"use strict";
// Destructuring
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 123,
    name: {
        firstName: 'Rifat',
        lastName: 'Rahaman',
        middleName: 'Ashikur'
    },
    gender: 'male',
    age: 30
};
// Generally we had to this
const myFavoriteColor = user.name.firstName;
const myAge = user.age;
// destructuring
// const {age, gender: myGender} = user; // getting gender as myGender // name Alias system
// console.log(age, myGender)
// One Level inside destructuring 
// const {name: {firstName, lastName: myLastName}} = user;
// console.log(firstName, myLastName)
/** Array Destructuring */
const friends = ["A", "B", "C"];
const [, secondFriend] = friends; // skip korlam
console.log(secondFriend);
//# sourceMappingURL=07_destructuring.js.map