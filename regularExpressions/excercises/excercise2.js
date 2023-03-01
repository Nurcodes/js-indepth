const email = "monkey@trees.com";

const pattern = /\w*@\w*\.com$/;

console.log(pattern.test(email));
console.log(email.match(pattern));
