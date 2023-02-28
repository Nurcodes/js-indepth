const sentence = "There once wAAs a monb1ey who knew Javascript...";

const pattern = /ja\wa..+r.pt/i;

//* We can test with a pattern
const test = pattern.test(sentence);
console.log(test);

//* match, sentence method
const match = sentence.match(pattern);
console.log(match);
