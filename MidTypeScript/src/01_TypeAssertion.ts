// ============================================================================
// TYPESCRIPT TYPE ASSERTION & TYPE NARROWING PRACTICE
// ============================================================================
// This file demonstrates type assertions, type narrowing, union types,
// and error handling patterns in TypeScript.

// ============================================================================
// ----- SECTION 1: ANY TYPE & TYPE ASSERTION BASICS -----
// ============================================================================

/*
 * TYPE ASSERTION (Type Casting)
 * =============================
 * Type assertion tells the TypeScript compiler to treat a value as a
 * specific type. It's a way to override TypeScript's type inference.
 * 
 * Syntax: (value as Type) or <Type>value
 * 
 * WARNING: Type assertions don't perform runtime checks. Use carefully!
 * They're useful when you know more about the type than TypeScript can infer.
 */

let anything: any;
anything = "Mezba";

// ============================================================================
// ----- SECTION 2: UNION TYPES & TYPE NARROWING -----
// ============================================================================

/*
 * UNION TYPES
 * ===========
 * A union type allows a variable to hold values of multiple types.
 * Syntax: Type1 | Type2 | Type3
 * 
 * TYPE NARROWING
 * ==============
 * When a function accepts a union type, we must narrow down the type
 * before using type-specific operations. This is done using:
 * - typeof operator (for primitives)
 * - instanceof operator (for objects/classes)
 * - custom type guards
 */

const kgToGMConverter = (input: string | number): number | string | undefined => {
    // Type narrowing using typeof
    if (typeof input === "number") {
        // Inside this block, input is narrowed to type 'number'
        return input * 1000;
    }
    else if (typeof input === "string") {
        // Inside this block, input is narrowed to type 'string'
        const [value] = input.split(" ");
        const type = typeof value;
        return `Converted output is : ${value} ${type}`;
    }
    // If no condition matches, the function implicitly returns undefined
};

// ============================================================================
// ----- SECTION 3: TYPE ASSERTION IN PRACTICE -----
// ============================================================================

/*
 * TYPE ASSERTION EXAMPLE
 * ======================
 * The kgToGMConverter function returns: number | string | undefined
 * 
 * If we know the result will be a number (based on our input),
 * we can use type assertion (as number) to tell TypeScript
 * to treat the result as a number type.
 */

const result1 = (kgToGMConverter("5 tk") as number);
console.log(result1);

const result2 = "";
console.log(result2);

// ============================================================================
// ----- SECTION 4: INTELLISENSE & DOT NOTATION -----
// ============================================================================

/*
 * VARIABLE PROPERTY ACCESS
 * =========================
 * In TypeScript/VS Code, typing a variable name followed by a dot (.)
 * triggers Intellisense, showing all available methods and properties
 * for that variable's type.
 * 
 * Example (commented out below):
 * const name = "ashik";
 * name.  // <-- Intellisense shows all string methods
 */

// const name = "ashik";
// name.

// ============================================================================
// ----- SECTION 5: ERROR HANDLING WITH TYPE ASSERTION -----
// ============================================================================

/*
 * CUSTOM ERROR TYPES
 * ===================
 * When catching errors in a try-catch block, the error is of type 'unknown'.
 * We can use type assertion to treat it as a custom error type.
 * 
 * This pattern is useful for providing type safety in error handling.
 */

// type CustomError = {
//     message: string;
// }

// try {
//     // Some code that might throw an error
// } catch (err) {
//     // Type assertion: treat 'err' as CustomError
//     console.log('my sms : ', (err as CustomError));
// }

// ============================================================================
// SUMMARY
// ============================================================================
// 
// KEY CONCEPTS DEMONSTRATED:
// 1. ANY TYPE - Disables type checking; use sparingly
// 2. UNION TYPES - Allow multiple type options (Type1 | Type2)
// 3. TYPE NARROWING - Use typeof/instanceof to narrow union types
// 4. TYPE ASSERTION - Tell TypeScript the specific type (value as Type)
// 5. FUNCTION RETURN TYPES - Union types for functions with multiple returns
// 6. ERROR HANDLING - Custom error types with type assertions
// 
// BEST PRACTICES:
// - Avoid using 'any' when possible
// - Always narrow types before using type-specific operations
// - Use type assertions cautiously; they bypass type checking
// - Consider custom error types for better error handling
//
// ============================================================================