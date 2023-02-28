const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const lowPrices = prices.filter((price) => {
  const tax = (15 / 100) * price + price;
  if (price * 1.15 < 10.0) return true;
  return false;
});
console.log(lowPrices);
