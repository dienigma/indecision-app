console.log("Utils is working.");

// Default Export
// export default square = x => x * x;

// Named exports
const square = x => x * x;
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
export { square, add, subtract as default };

// Alternate export syntax.
// export const add = (x, y) => x + y;
// export const square = x => x * x;

// export default subtract = (x, y) => x - y;
