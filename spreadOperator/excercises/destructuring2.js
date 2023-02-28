const store = new Map([
  ["cups", 46],
  ["Candles", 121],
  ["Vases", 15],
]);

for (const [key, val] of store) {
  console.log(`${key} => ${val}`);
}
