// function
// arrow function, normal function

function add(a : number, b : number) : number {
    return a + b;
}
// console.log(add(1, '33'))  // Will give error
console.log(add(1, 55))

const arrowAdd = ( a : number, b : number) : number => {
    return a + b;
}

console.log(arrowAdd(1, 55))


// Object => function => Method
const user = {
    name: 'Rifat',
    baseSalary: 100,
    getSalary(value : number) {
        return this.baseSalary + value + value*0.5
    }
}


let x = user.getSalary(50);
console.log(x)


// map

const arr : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrSquare = arr.map((item: number) : number => item * item);
console.log(arrSquare)