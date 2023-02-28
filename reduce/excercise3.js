const caps = ["light", "banana", "phone", "book", "mouse"]
  .map((item) => item.toLocaleUpperCase())
  .reduce((acc, cap) => {
    return acc + " " + cap;
  }, "");
console.log(caps);
