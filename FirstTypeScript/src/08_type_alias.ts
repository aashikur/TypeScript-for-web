// Type Alias 

const user1: {
    id: number,
    name: {
        firstName: string,
        lastName: string, 
    },
    gender: 'male' | 'female',
    age: number,
    address : {
        city: string,
        division: string
    }
} = {
    id: 123,
    name: {
        firstName: 'Rifat',
        lastName: 'Rahaman',
    },
    gender: 'male', // other can't be written
    age: 30,
    address: {
        city: 'Dhaka',
        division: 'Mirpur'
    }
}

const user2: {
    id: number,
    name: {
        firstName: string,
        lastName: string, 
    },
    gender: 'male' | 'female',
    age: number,
    address : {
        city: string,
        division: string
    }
} = {
    id: 123,
    name: {
        firstName: 'Rifat',
        lastName: 'Rahaman',
    },
    gender: 'male', // other can't be written
    age: 30,
    address: {
        city: 'Dhaka',
        division: 'Mirpur'
    }
}

// above we are doing type declaration 2 times
// but => 

type user = {
    id: number,
    name: {
        firstName: string,
        lastName: string, 
    },
    gender: 'male' | 'female',
    age: number,
    address : {
        city: string,
        division: string
    }
}

// now we just used user type
const user3: user = {
    id: 123,
    name: {
        firstName: 'Rifat',
        lastName: 'Rahaman',
    },
    gender: 'male', 
    age: 30,
    address: {
        city: 'Dhaka',
        division: 'Mirpur'
    }
}

// now we just used user type
const user32: user = {
    id: 123,
    name: {
        firstName: 'Rifat',
        lastName: 'Rahaman',
    },
    gender: 'male', 
    age: 30,
    address: {
        city: 'Dhaka',
        division: 'Mirpur'
    }
}


// Other Example of Variable | string 
type IsAdmin = true;
const isAdmin: IsAdmin = true;

type Name = string;
const name: Name = 'Rifat';


// Alias for function 
type AddFunction = (a : number, b : number) => number

// const add = (a : number, b : number) : number => a + b
const add:AddFunction = (a, b) => a + b

