import { expect } from "chai";
import FindPairs from ".";

describe("find-pair-with-given-sum-array", function() {
  it("native implementation", function() {
    const input = [8, 7, 2, 5, 3, 1];
    const sum = 10;
    const res = FindPairs({ input, sum });
    expect(res.length).to.equal(2);
  });
});
