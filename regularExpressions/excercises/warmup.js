const quote = "What is this> A center for ants?";

const pattern = /ant/;
const test = pattern.test(quote);

const match = quote.match(pattern);
console.log(test);
console.log(match);
