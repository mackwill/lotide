const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

//Test Code

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(2, 1);
