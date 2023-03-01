import { a } from "./moduleA.js";
const b = await new Promise((res, rej) => setTimeout(() => res("B"), 3000));
console.log("running b");
export { b };
