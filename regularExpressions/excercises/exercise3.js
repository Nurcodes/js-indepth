const phoneNumber = "my number is 020-382-6940 will it work after";

const phonePattern = /\d\d\d-\d\d\d-\d\d\d\d/;

console.log(phoneNumber.match(phonePattern));
console.log(phonePattern.test(phoneNumber));
