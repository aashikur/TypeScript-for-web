// nullable type

// const getUser = (input: string | null ) => {
//     if(input) {
//         console.log('user found ', input);
//     }
//     else{
//         console.log('User not found');
//     }
// }

// getUser(null);
// using input as null is nullable type

// Unknown type
// const cal = (input : unknown ) => { // error (no input working...)
//     if(typeof input === "number"){
//         console.log(input * 2);
//     }
//     else if (typeof input === "string"){
//         const splitInput = input.split(" ");
//         console.log(Number(splitInput[0])*2);
//     } 
//     else{
//         console.log("Unknown type");
//     }
// }

// cal(100)
// cal("100 TK")
// cal(null)



// // VOID => 111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
// const throwError = (msg: string):never => {
//     throw new Error (msg)
// }

// throwError("Error")