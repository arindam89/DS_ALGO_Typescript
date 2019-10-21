/**
 * Naive solution would be to consider every pair in given array and return if desired sum is found.
 */
const FindPairs = ({
  input,
  sum
}: {
  input: number[];
  sum: number;
}): string[] => {
  let i: number = 0;
  let j: number = 0;
  const solution: any[] = [];

  for (let i = 0; i < input.length; i++) {
    const first = input[i];
    for (let j = i + 1; j < input.length; j++) {
      const second = input[j];
      if (first + second === sum) {
        solution.push([i, j]);
      }
    }
  }
  return solution;
};

export default FindPairs;
