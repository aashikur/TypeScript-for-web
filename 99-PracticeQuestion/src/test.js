"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(` hello ${this.name}, age ${this.age}`);
    }
}
const p1 = new Person('ashik', 23);
// public privete protected 
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    showSalary() {
        console.log(`Salary of ${this.name} is ${this.salary}`);
    }
}
const emp1 = new Employee('ashik', 50000, 'IT');
// console.log(emp1.name);
// console.log(emp1.salary);
// console.log(emp1.department);
// emp1.showSalary();
// ShortCut for class properties
class Car {
    brand;
    price;
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    showPrice() {
        console.log(`Price: ${this.price}`);
    }
}
// const c = new Car("BMW", 50000);
// console.log(c.brand); // BMW
// c.showPrice();        // Price: 50000
class BankAccount {
    _balance;
    constructor(_balance = 0) {
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    set deposite(ammount) {
        if (ammount > 0)
            this._balance += ammount;
    }
}
const myAccount = new BankAccount(1000);
console.log(myAccount.balance);
myAccount.deposite = -500;
console.log(myAccount.balance);
// Static members
class Helper {
    static PI = 3.14;
    static area(radius) {
        return Helper.PI * radius * radius;
    }
}
class Shape {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Square extends Shape {
    side;
    constructor(side) {
        super("Square");
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
const sq = new Square(5);
console.log(sq.name); // Square
console.log(sq.area()); // 25
//# sourceMappingURL=test.js.map