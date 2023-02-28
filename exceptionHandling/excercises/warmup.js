function primitive() {
  console.log("Program started!");
  throw new Error("Uh oh!");

  console.log("Program complete");
}

//& primitive();

try {
  primitive();
} catch (err) {
  console.log("CAUGHT ERROR...");
  console.error(err);
}
