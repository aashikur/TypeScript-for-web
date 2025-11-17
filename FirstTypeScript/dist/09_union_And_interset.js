"use strict";
// Union
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role == 'admin') {
        console.log('Admin Dashboard');
    }
    else if (role == 'user') {
        console.log('User Dashboard');
    }
};
getDashboard('admin');
getDashboard('user');
const MrManager = {
    id: '123',
    name: 'Rifat',
    photoNo: '123',
    designation: 'CEO',
    teamSize: 10
};
//# sourceMappingURL=09_union_And_interset.js.map