/**
 * 1. Sort the array (O(nlogn))
 * 2. Move i and j intelligently (O(n)) to find the pair.
 */

import insertionSort from "../../../../Algorithms/sorting/insertion_sort";

const FindPairs = ({
  input,
  sum
}: {
  input: number[];
  sum: number;
}): string[] => {
  let myMap: object = {};
  const solution: any[] = [];
  const unsorted = input.slice(0);
  // insertion sort is not pure and it modifies the original array.
  const sorted = insertionSort(input);
  let i = sorted.length - 1,
    j = 0;
  while (i > j) {
    const current_sum = sorted[i] + sorted[j];
    if (current_sum === sum) {
      const iIndex = unsorted.indexOf(sorted[i]);
      const jIndex = unsorted.indexOf(sorted[j]);
      solution.push([iIndex, jIndex]);
      // So that we move forward.
      j++;
    } else if (current_sum < sum) {
      j++;
    } else if (current_sum > sum) {
      i--;
    }
  }
  return solution;
};

export default FindPairs;
