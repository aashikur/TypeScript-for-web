// Type AsserTion

let anything: any;

anything = "Mezba";

const kgToGMConverter = (input: string | number) : number | string | undefined => {
    if (typeof input === "number") { return input * 1000; }
    else if (typeof input === "string") {
        const [value] = (input.split(" "));
        const type = typeof value;
        return `Converted output is : ${value} ${type}`
    }

}
const result1 = (kgToGMConverter("5 tk") as number);
console.log(result1)


const result2 = "";
console.log(result2)


// variable (.) will give you all the mehod of thay syl=le....
// const name = "ashik";
// name.



// type CustomError = {
//     message: string;
// }

// try {

// } catch (err){
//     console.log('my sms : ', (err as CustomError))
// }