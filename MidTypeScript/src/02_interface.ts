// ============================================================================
// TYPESCRIPT TYPES vs INTERFACES & OBJECT COMPOSITION
// ============================================================================
// This file demonstrates the differences between type and interface,
// intersection types, interface extension, and practical use cases.

// ============================================================================
// ----- SECTION 1: TYPE vs INTERFACE - FUNDAMENTAL DIFFERENCES -----
// ============================================================================

/*
 * TYPE KEYWORD
 * ============
 * A type is a TypeScript construct that can represent any shape:
 * - Primitive types (string, number, boolean)
 * - Union types (Type1 | Type2)
 * - Intersection types (Type1 & Type2)
 * - Arrays, tuples, functions
 * - Objects
 * 
 * KEY CHARACTERISTICS:
 * ✔ Highly flexible and versatile
 * ✔ Can combine using intersection (&)
 * ✔ Can represent unions (|)
 * ❌ Cannot be reopened or re-declared
 * ❌ Cannot use interface-style extension
 */

/*
 * INTERFACE KEYWORD
 * =================
 * An interface is a contract that describes the shape of an object.
 * It's specifically designed for defining object structures.
 * 
 * KEY CHARACTERISTICS:
 * ✔ Excellent for object-oriented programming
 * ✔ Can extend other interfaces (inheritance-like behavior)
 * ✔ Can be reopened and merged (declaration merging)
 * ✔ Better for defining class contracts
 * ❌ Cannot directly use union types
 * ❌ Limited to object shapes
 */

// ============================================================================
// ----- SECTION 2: BASIC TYPE DEFINITION -----
// ============================================================================

/*
 * TYPE ALIAS FOR OBJECTS
 * ======================
 * A type can define an object structure. This creates a reusable
 * blueprint for objects with specific properties and their types.
 */

type User = {
  name: string;
  age: number;
};

// ============================================================================
// ----- SECTION 3: BASIC INTERFACE DEFINITION -----
// ============================================================================

/*
 * INTERFACE FOR OBJECTS
 * =====================
 * An interface defines the same structure as a type but uses
 * interface syntax. It's particularly useful for class contracts
 * and OOP-style programming.
 */

interface IUser {
  name: string;
  age: number;
}

// ============================================================================
// ----- SECTION 4: UNION TYPES -----
// ============================================================================

/*
 * UNION TYPE (Type1 | Type2)
 * ==========================
 * A union type allows a value to be one of several types.
 * This is a feature that only 'type' can directly represent.
 * 
 * In this example, Role is a type that specifies a property
 * can only be "admin" OR "user" (literal types).
 */

type Role = {
  role: "admin" | "user";
};

// ============================================================================
// ----- SECTION 5: INTERSECTION TYPES (&) -----
// ============================================================================

/*
 * INTERSECTION TYPES
 * ==================
 * An intersection type combines multiple types into one using the (&) operator.
 * The resulting type must satisfy ALL types in the intersection.
 * 
 * Syntax: Type1 & Type2 & Type3
 * 
 * Example below: UserWithRole combines User AND Role
 * Result: An object with name, age, AND role properties
 */

type UserWithRole = User & Role;

// ============================================================================
// ----- SECTION 6: USING TYPES - PRACTICAL EXAMPLES -----
// ============================================================================

/*
 * CREATING INSTANCES WITH TYPES
 * ==============================
 * Objects must satisfy all properties defined in their type.
 */

const user1: IUser = {
  name: "Mr. X",
  age: 100,
};

const user2: UserWithRole = {
  name: "Mr. Y",
  age: 102,
  role: "admin",
};

// ============================================================================
// ----- SECTION 7: INTERFACE EXTENSION (INHERITANCE) -----
// ============================================================================

/*
 * EXTENDS KEYWORD WITH INTERFACES
 * ================================
 * The 'extends' keyword allows an interface to inherit properties
 * from another interface. This is TypeScript's OOP-style composition.
 * 
 * Syntax: interface ChildInterface extends ParentInterface { }
 * 
 * Result: IUserWithRole has all properties from IUser PLUS the role property
 * This achieves the same result as: type UserWithRole = User & Role
 */

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

// ============================================================================
// ----- SECTION 8: TYPE ALIASES FOR ARRAYS -----
// ============================================================================

/*
 * TYPE ALIAS FOR ARRAY
 * ====================
 * A type can be a simple alias for an array type.
 * This makes the code more readable and reusable.
 */

type Friends = string[];

const friends: Friends = ["A", "B", "C"]; // Array with indices [0, 1, 2]

// ============================================================================
// ----- SECTION 9: INTERFACE WITH INDEX SIGNATURES -----
// ============================================================================

/*
 * INDEX SIGNATURE IN INTERFACE
 * ============================
 * An index signature allows an object to have properties accessed by index.
 * Syntax: [ key: KeyType ] : ValueType
 * 
 * This defines an object where numeric indices map to string values.
 * Useful for array-like or dictionary-like objects.
 */

interface IFriends {
  [index: number]: string; // Any numeric index returns a string
}

const friends2: IFriends = ["A", "B", "C"]; // [0, 1, 2] index

// ============================================================================
// ----- SECTION 10: TYPE ALIAS FOR FUNCTIONS -----
// ============================================================================

/*
 * FUNCTION TYPE ALIAS
 * ===================
 * A type can represent a function signature.
 * Syntax: type FunctionName = (params: Type) => ReturnType
 * 
 * This defines a reusable blueprint for functions with specific
 * parameter types and return type.
 */

type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;
const sum: Add = (a, b) => a + b;

// ============================================================================
// ----- SECTION 11: INTERFACE FOR FUNCTIONS -----
// ============================================================================

/*
 * FUNCTION INTERFACE
 * ==================
 * An interface can also represent a function signature.
 * The function is defined as a call signature within the interface.
 * 
 * Syntax:
 * interface IFunctionName {
 *   (params: Type) : ReturnType
 * }
 * 
 * This achieves the same result as a function type alias.
 */

interface IAdd {
  (num1: number, num2: number): number;
}

const sum2: IAdd = (a, b) => a + b;

// ============================================================================
// SUMMARY & BEST PRACTICES
// ============================================================================

/*
 * WHEN TO USE TYPE
 * ================
 * - Need union types (|)
 * - Need primitive type aliases
 * - Need intersection types (&)
 * - Working with utility types
 * - Need flexibility and composition
 * 
 * WHEN TO USE INTERFACE
 * =====================
 * - Defining object structures for classes
 * - Need to extend other interfaces
 * - Building OOP-style hierarchies
 * - Defining contracts for objects
 * - Need declaration merging capabilities
 * 
 * KEY TAKEAWAYS
 * =============
 * 1. TYPE - More flexible, supports unions and intersections
 * 2. INTERFACE - Better for OOP, extends, and contracts
 * 3. INTERSECTION (&) - Combines multiple types
 * 4. EXTENDS - Interface inheritance (OOP pattern)
 * 5. INDEX SIGNATURE - Maps keys to values in objects/interfaces
 * 6. BOTH - Can represent function signatures and objects
 * 
 * GENERAL GUIDELINE
 * =================
 * - Use interface for object contracts and class implementations
 * - Use type for everything else (unions, primitives, complex shapes)
 * - Prefer interface when modeling domain objects
 * - Prefer type when composing with intersections or unions
 */

// ============================================================================