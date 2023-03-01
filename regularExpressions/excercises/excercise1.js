const email = "mon.comkey@treescom";

const emailPattern = /\.com$/;
console.log(emailPattern.test(email));
console.log(email.match(emailPattern));
