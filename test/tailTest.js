const tail = require("../tail");

const assert = require("chai").assert;

//Test Cases
// assertEqual(["Yo Yo", "Lighthouse", "Labs"].length, 3);
// assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
// assertEqual(tail([]).length, 0);
// assertEqual(tail(["Test"]).length, 0);

describe("#tail", () => {
  it("should return ['Cage', 'Master', 'Supreme'] for ['Nicholas', 'Cage', 'Master', 'Supreme']", () => {
    assert.sameOrderedMembers(tail(["Nicholas", "Cage", "Master", "Supreme"]), [
      "Cage",
      "Master",
      "Supreme",
    ]);
  });

  it("should return [] for []", () => {
    assert.sameOrderedMembers(tail([]), []);
  });

  it("should return [] for ['Cage']", () => {
    assert.sameOrderedMembers(tail(["Cage"]), []);
  });
});
