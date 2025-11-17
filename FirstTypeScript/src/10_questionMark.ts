// ? : ternary operator : decision making
// ?? : nullish coalescing operator // null or undefined
// ?. optional chaining




// const userAge = 21;

// if(userAge >= 21){
//     console.log('eligible');
// } else {
//     console.log('not eligible');
// }



// const BiyerBoyos = (userAge: number) => {
//     if(userAge >= 21){
//         console.log('eligible');
//     } else {
//         console.log('not eligible');
//     }
// }


// const BiyerBoyos = (userAge: number) => userAge >= 21 ? console.log('eligible') : console.log('not eligible')


// BiyerBoyos(20)




// Nullishh Coalescing Operator // Null or Undefined er kaj korbe or kisu korbe nah... 

// const userTheme = null;
// const defaultTheme = userTheme ?? 'dark';
// console.log(defaultTheme)


// const isAuthenticated = null; // ""
// const NulishValue = isAuthenticated ?? "Youer are not authenticated";
// const TernaryValue = isAuthenticated ? "Youer are authenticated" : "Youer are not authenticated";

// console.log({'NalishValue': NulishValue, 'TernaryValue': TernaryValue}); // emply string and (nul/undefined) different result



// // Optional Chaining 
// const user = {
//     name: 'Rifat',
//     address: {
//         city: 'Dhaka',
//         division: 'Mirpur'
//     }
// }
// console.log(user?.address?.city)
// console.log(user?.address?.phone)