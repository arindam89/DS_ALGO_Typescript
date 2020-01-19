/**
 * Hashing solution would be to consider while inserting an element if (sum - element) is present or not. if preset it immediately returns the pair.
 * Overall algo can keep a count of all the pairs like that.
 */
const FindPairs = ({
  input,
  sum
}: {
  input: number[];
  sum: number;
}): string[] => {
  let myMap: any = {};
  const solution: any[] = [];
  input.forEach((element, index) => {
    const gap = (sum - element).toString();
    if (gap in myMap) {
      solution.push([index, myMap[gap]]);
    } else {
      // Store the element and it's index.
      myMap[element.toString()] = index;
    }
  });
  return solution;
};

export default FindPairs;
