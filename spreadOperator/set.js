const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(4);
mySet.add(5);
mySet.add(6);

const mySetSpread = [...mySet, 10, 5, 4];
console.log(mySetSpread);
mySetSpread.push(10);
console.log(mySet);
