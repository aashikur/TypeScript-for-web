// Union

type UserRole = 'admin' | 'user' ; // union type

const getDashboard = (role: UserRole) => {
    if( role == 'admin' ) {
        console.log('Admin Dashboard')
    } else if( role == 'user' ) {
        console.log('User Dashboard')
    }
}

getDashboard('admin')
getDashboard('user')
// getDashboard('moderator')  // Error will give



// Intersection
type Employee = {
    id: string;
    name: string;
    photoNo : string;

}

type Manager = {
    designation: string;
    teamSize: number;

}


type EmployeeWithManager = Employee & Manager; // manager is also employee 

const MrManager : EmployeeWithManager = {
    id: '123',
    name: 'Rifat',
    photoNo: '123',
    designation: 'CEO',
    teamSize: 10
}