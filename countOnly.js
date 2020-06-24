const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countOnly = (allItems, itemsToCount) => {
  let foundItems = {};
  for (let item in itemsToCount) {
    let count = 0;
    allItems.map((elem) => {
      if (elem === item) {
        count++;
        foundItems[item] = count;
      }
    });
  }
  return foundItems;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];
const result1 = countOnly(firstNames, {
  "Jason": true,
  "Karima": true,
  "Fang": true,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
