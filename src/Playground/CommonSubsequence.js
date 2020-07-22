/**
 * Q: Find the common subsequence between two strings s1 and s2.
 * Here the elements can skip elements but the overall order matters.
 * E.g.
 * Input: "ABAZDC", "BACBAD"
 * Output: "ABAD"
 * Its a Dynamic Problem.
 */


function findLongestCommonSubsequence(s1, s2) {
  if (!s1 || !s2 || s1.length === 0 || s2.length === 0)
    return ""; // No match possible, empty case is this.

  const s1Arr = s1.split("");
  const s2Arr = s2.split("");
  const T = [];

  for (let i = 0; i <= s1Arr.length; i++) {
    T[i] = [];
    T[i][0] = 0;
  }

  for (let j = 0; j <= s2Arr.length; j++) {
    T[0][j] = 0;
  }

  for (let i = 1; i <= s1Arr.length; i++) {
    for (let j = 1; j <= s2Arr.length; j++) {
      if (s1Arr[i - 1] === s2Arr[j - 1]) {
        T[i][j] = T[i - 1][j - 1] + 1;
      } else {
        T[i][j] = Math.max(T[i - 1][j], T[i][j - 1]);
      }
    }
  }


  // Now find the path
  const reversePath = [];
  let startX = s1Arr.length;
  let startY = s2Arr.length;
  while (T[startX][startY] !== 0) {
    if (T[startX][startY - 1] === T[startX][startY]) {
      startY--;
    } else if (T[startX - 1][startY] === T[startX][startY]) {
      startX--;
    } else {
      reversePath.push(s1Arr[startX - 1]);
      // or reversePath.push(s2Arr[startY - 1]);
      // Go diagonal
      startX--;
      startY--;
    }
  }

  return reversePath.reverse().join("");

}

console.log(findLongestCommonSubsequence("ABAZDC", "BACBAD"));
console.log(findLongestCommonSubsequence("AGGTAB", "GXTXAYB"));