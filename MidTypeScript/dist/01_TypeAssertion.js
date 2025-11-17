"use strict";
// Type AsserTion
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = "Mezba";
const kgToGMConverter = (input) => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = (input.split(" "));
        const type = typeof value;
        return `Converted output is : ${value} ${type}`;
    }
};
const result1 = kgToGMConverter("5 tk");
console.log(result1);
const result2 = "";
console.log(result2);
try {
}
catch (err) {
    console.log('my sms : ', err);
}
//# sourceMappingURL=01_TypeAssertion.js.map