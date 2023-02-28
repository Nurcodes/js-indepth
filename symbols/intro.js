const mySymbol = Symbol();
const namedSymbol = Symbol("monkey");
console.log(mySymbol);
console.log(namedSymbol);

console.log(typeof mySymbol);
console.log(typeof namedSymbol);

console.log(Symbol("monkey") == namedSymbol);
