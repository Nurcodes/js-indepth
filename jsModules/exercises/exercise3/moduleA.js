const a = await new Promise((res, rej) => setTimeout(() => res("A"), 1000));
console.log("running A");
export { a };
