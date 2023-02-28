let number = 1337;

try {
  number += Math.floor(Math.random() * 1000);
  if (number < 2000) throw new Error("You Lose!");
  else {
    console.log("You win!");
  }
} catch (err) {
  console.error(err);
} finally {
  console.log(number);
}
