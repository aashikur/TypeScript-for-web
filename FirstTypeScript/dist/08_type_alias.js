"use strict";
// Type Alias 
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    id: 123,
    name: {
        firstName: 'Rifat',
        lastName: 'Rahaman',
    },
    gender: 'male', // other can't be written
    age: 30,
    address: {
        city: 'Dhaka',
        division: 'Mirpur'
    }
};
const user2 = {
    id: 123,
    name: {
        firstName: 'Rifat',
        lastName: 'Rahaman',
    },
    gender: 'male', // other can't be written
    age: 30,
    address: {
        city: 'Dhaka',
        division: 'Mirpur'
    }
};
// now we just used user type
const user3 = {
    id: 123,
    name: {
        firstName: 'Rifat',
        lastName: 'Rahaman',
    },
    gender: 'male',
    age: 30,
    address: {
        city: 'Dhaka',
        division: 'Mirpur'
    }
};
// now we just used user type
const user32 = {
    id: 123,
    name: {
        firstName: 'Rifat',
        lastName: 'Rahaman',
    },
    gender: 'male',
    age: 30,
    address: {
        city: 'Dhaka',
        division: 'Mirpur'
    }
};
const isAdmin = true;
const name = 'Rifat';
// const add = (a : number, b : number) : number => a + b
const add = (a, b) => a + b;
//# sourceMappingURL=08_type_alias.js.map