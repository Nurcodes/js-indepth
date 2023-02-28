try {
  if (Math.floor(Math.random() * 3) === 1) throw Error("Custom Error");
  else {
    console.log("no error");
  }
} catch (e) {
  console.error(e);
  console.error("caught");
} finally {
  console.log("finishing up");
}
