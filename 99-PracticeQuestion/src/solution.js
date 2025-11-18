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
//# sourceMappingURL=solution.js.map