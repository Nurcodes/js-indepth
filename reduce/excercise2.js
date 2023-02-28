const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const afterTax = prices.reduce((acc, price) => {
  if (price > 6) return acc + price;
  return acc + price * 1.2;
});

console.log(prices);
console.log(afterTax);
