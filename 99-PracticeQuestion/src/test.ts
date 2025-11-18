class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(` hello ${this.name}, age ${this.age}`)
    }
}

const p1 = new Person('ashik', 23);



// public privete protected 

class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string){
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    showSalary() {
        console.log(`Salary of ${this.name} is ${this.salary}`);
    }

    
}

const emp1  = new Employee('ashik', 50000, 'IT');
// console.log(emp1.name);
// console.log(emp1.salary);
// console.log(emp1.department);

// emp1.showSalary();



// ShortCut for class properties

class Car {
  constructor(public brand: string, private price: number) {}

  showPrice() {
    console.log(`Price: ${this.price}`);
  }
}
// const c = new Car("BMW", 50000);
// console.log(c.brand); // BMW
// c.showPrice();        // Price: 50000



class BankAccount {
    constructor(private _balance: number = 0) {}

    get balance() {
        return this._balance;
    }

    set deposite(ammount: number) {
        if(ammount > 0) this._balance += ammount;
    }


}

const myAccount  = new BankAccount(1000);
console.log(myAccount.balance);

myAccount.deposite = -500;
console.log(myAccount.balance);


// Static members

class Helper {
    static PI: number = 3.14;
    static area(radius: number): number {
        return Helper.PI * radius * radius;
    }
}





abstract class Shape {
  constructor(public name: string) {}
  abstract area(): number; // must be implemented in subclass
}

class Square extends Shape {
  constructor(public side: number) {
    super("Square");
  }
  area() {
    return this.side * this.side;
  }
}

const sq = new Square(5);
console.log(sq.name); // Square
console.log(sq.area()); // 25
