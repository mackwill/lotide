const tail = require("../tail");

const assert = require("chai").assert;

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
