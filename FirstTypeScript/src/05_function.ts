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