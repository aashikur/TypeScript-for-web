"use strict";
/*
- This solution.ts file is an example; replace it with your own code.
- Use the same function names and parameter names as in the problem statement.
- Write only the code inside the function bodies and return the result.
- Do not use any console.log statements or comments.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const getSwallowVelocity = (type) => {
    if (type === 'african') {
        return 'Roughly 11 meters per second.';
    }
    return "I... I don't know that!";
};
const isCatLiquid = (isAsleep, containerShape) => {
    return isAsleep && containerShape !== 'none';
};
class Wizard {
    name;
    favoriteSpell;
    constructor(name, favoriteSpell) {
        this.name = name;
        this.favoriteSpell = favoriteSpell;
    }
    castSpell() {
        return `${this.name} casts ${this.favoriteSpell}!`;
    }
}
/*
==========================================================
                 Problem Solving with TypeScript
==========================================================

This assignment is designed to assess your understanding of fundamental TypeScript concepts.
It includes a series of problems that cover topics such as types, functions, classes,
interfaces, and array manipulation.

----------------------------------------------------------
Problem 1:
----------------------------------------------------------
Create a function formatValue that accepts a value which may
be a string, number, or boolean, and returns:

- If string  → return uppercase
- If number  → return number * 10
- If boolean → return opposite value (true→false, false→true)

Requirements:
- Correct parameter type + return type
- Must use type checking

Sample Input:
console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));

Sample Output:
HELLO
50
false






----------------------------------------------------------
Problem 2:
----------------------------------------------------------
Create a function getLength that accepts a string or array
and returns its length.

- If string → return number of chars
- If array  → return number of elements

Requirements:
- Correct parameter type + return type
- Must use typeof or Array.isArray

Sample Input:
console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));

Sample Output:
10
4

----------------------------------------------------------
Problem 3:
----------------------------------------------------------
Create a Person class with properties name and age.
Add a method getDetails that returns:
"Name: [name], Age: [age]"

Requirements:
- Use a constructor
- getDetails must return the exact formatted string

Sample Input:
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

----------------------------------------------------------
Problem 4:
----------------------------------------------------------
Create a function filterByRating that accepts an array of items:
- title: string
- rating: number (0–5)

Return only items with rating >= 4
Do not mutate original array.

Sample Input:
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));

Sample Output:
[
  { title: 'Book A', rating: 4.5 },
  { title: 'Book C', rating: 5.0 }
]

----------------------------------------------------------
Problem 5:
----------------------------------------------------------
Create a function filterActiveUsers that accepts an array of:
- id
- name
- email
- isActive (boolean)

Return only users where isActive is true.
Do not mutate original array.

Sample Output:
[
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true }
]

----------------------------------------------------------
Problem 6:
----------------------------------------------------------
Define an interface Book:
- title
- author
- publishedYear
- isAvailable

Create a function printBookDetails(book: Book) → prints:
"Title: X, Author: Y, Published: Z, Available: Yes/No"

----------------------------------------------------------
Problem 7:
----------------------------------------------------------
Create a function getUniqueValues that accepts two arrays
(strings or numbers) and returns a new array of unique values.

❗ You CANNOT use built-in methods (no Set, no includes, etc.)

Sample:
getUniqueValues([1,2,3],[3,4,5]) → [1,2,3,4,5]

----------------------------------------------------------
Problem 8:
----------------------------------------------------------
Create calculateTotalPrice that accepts product objects:
- name
- price
- quantity
- discount? (0–100)

Formula:
total = price * quantity
If discount exists → apply it

If array empty → return 0

Sample:
[
  { name:'Pen', price:10, quantity:2 },
  { name:'Notebook', price:25, quantity:3, discount:10 },
  { name:'Bag', price:50, quantity:1, discount:20 }
]

Output: 127.5

----------------------------------------------------------
Blog Task (Write in README.md)
----------------------------------------------------------
Write a short Bangla blog answering ANY 2 of these:

1. Difference between interfaces and types
2. Use of keyof in TS
3. Difference between any, unknown, never
4. Use of enums with examples
5. Example of union and intersection types

----------------------------------------------------------
Submission Guidelines
----------------------------------------------------------
- Keep ALL solutions in solution.ts
- Do NOT use console.log in final code
- Exact output format required
- Must submit a GitHub repo with solution.ts + README.md
- Deadline:
   60 marks → Nov 18 (before 11:59 PM)
   50 marks → Nov 19
   30 marks → after Nov 19

==========================================================
END OF ASSIGNMENT TEXT — WRITE YOUR SOLUTIONS BELOW
==========================================================
*/
//# sourceMappingURL=solution%20copy.js.map