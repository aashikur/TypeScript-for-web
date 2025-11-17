"use strict";
// name can be change by user.name = 'Rifat';
// but if used const user = {name: 'Rifat'}; then name can't be change
// or use access modifier 'readonly'; then name can't be change
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    organization: 'Google',
    name: 'Ashik',
    role: 'CEO', // Will give error
    isMarried: true
};
// user.organization = 'Microsoft';  // Will give error
user.name = 'Rifat';
// user.role = 'CTO'; // Will give error
console.log(user);
//# sourceMappingURL=04_obj_literal_optional.js.map