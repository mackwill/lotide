const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it("should return [3] for [1,2,3,4,5]", () => {
    assert.sameOrderedMembers(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return [2, 3] for [1,2,3,4]", () => {
    assert.sameOrderedMembers(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return [1] for [1]", () => {
    assert.sameOrderedMembers(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return ['Cage', 'Master'] for ['Nicholas', 'Cage', 'Master', 'Supreme']", () => {
    assert.sameOrderedMembers(
      middle(["Nicholas", "Cage", "Master", "Supreme"]),
      ["Cage", "Master"]
    );
  });
});
