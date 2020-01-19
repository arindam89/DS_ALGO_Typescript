import FindPairs from "./bruteforce/index";
import FindPairs2 from "./hashing/index";
import FindPairs3 from "./sorting/index";

describe("find-pair-with-given-sum-array", function() {
  let input: number[];
  let sum: number;
  beforeEach(() => {
    input = [8, 7, 2, 5, 3, 1];
    sum = 10;
  });
  it("native implementation", function() {
    const res = FindPairs({ input, sum });
    console.log(res);
    expect(res.length).toEqual(2);
  });
  it("hashing implementation", function() {
    const res = FindPairs2({ input, sum });
    console.log(res);
    expect(res.length).toEqual(2);
  });
  it("sorting implementation", function() {
    const res = FindPairs3({ input, sum });
    console.log(res);
    expect(res.length).toEqual(2);
  });
});
