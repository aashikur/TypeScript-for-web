"use strict";
// spread operator
Object.defineProperty(exports, "__esModule", { value: true });
// // for array
// const friends = ['Rahim', 'Karim']
// const schoolFriends = ['pintu', 'jhunti', 'bontu']
// const collageFriends = ['adf', 'dfd', 'fdfdf']
// friends.push(...schoolFriends)
// console.log(friends)
// // for object
// const user = {
//     name: 'Rifat',
//     age: 30
// } 
// const otherInfo = {
//     organization: 'Google',
//     role: 'CEO'
// }
// const totalInfo = {...user, ...otherInfo}
// console.log(totalInfo)
// Rest Operator // EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
// http://prntscr.com/Fz7Y0TQJurWF
const sendInvite = (friend1, friend2, friend3) => {
    console.log(`send invite to, ${friend1}`);
    console.log(`send invite to, ${friend3}`);
    console.log(`send invite to, ${friend2}`);
};
sendInvite('Rahim', 'Karim', 'Pintu');
// const sendInvite2 = (...friends : string[]) => {
//     friends.forEach(friend => {
//         console.log(`send invite to, ${friend}`);
//     })
// }
// sendInvite2('Rahim', 'Karim', 'Pintu');
//# sourceMappingURL=06_spread_rest.js.map