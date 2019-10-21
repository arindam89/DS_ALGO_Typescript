import { expect } from "chai";
import FindPairs from "./bruteforce";
import FindPairs2 from "./hashing";
import FindPairs3 from "./sorting";

describe("find-pair-with-given-sum-array", function() {
  let input: number[];
  let sum: number;
  before("Initializing the test", () => {
    input = [8, 7, 2, 5, 3, 1];
    sum = 10;
  });
  it("native implementation", function() {
    const res = FindPairs({ input, sum });
    console.log(res);
    expect(res.length).to.equal(2);
  });
  it("hashing implementation", function() {
    const res = FindPairs2({ input, sum });
    console.log(res);
    expect(res.length).to.equal(2);
  });
  it("sorting implementation", function() {
    const res = FindPairs3({ input, sum });
    console.log(res);
    expect(res.length).to.equal(2);
  });
});
