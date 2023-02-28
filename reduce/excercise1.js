const companies = ["apple", "tesla", "spacex", "amazon", "google"];

const modded = companies.reduce((acc, item, idx, arr) => {
  if (item.startsWith("a")) {
    return acc;
  }
  if (idx == arr.length - 1) return acc + item;
  return acc + item + "-";
}, "");

console.log(companies);
console.log(modded);
