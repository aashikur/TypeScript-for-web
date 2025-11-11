// name can be change by user.name = 'Rifat';
// but if used const user = {name: 'Rifat'}; then name can't be change
// or use access modifier 'readonly'; then name can't be change

const user : {
    readonly organization: string,
    role?: 'CEO',
    name: string,
    age?: number
    isMarried?: boolean
} = {
    organization: 'Google',
    name: 'Ashik',
    role: 'CEO', // Will give error
    isMarried: true
}

// user.organization = 'Microsoft';  // Will give error
user.name = 'Rifat';
// user.role = 'CTO'; // Will give error

console.log(user);