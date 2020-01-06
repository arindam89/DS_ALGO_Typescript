### Problem

Check if subarray with 0 sum is exists or not.  Given an array of integers, check if array contains a sub-array having 0 sum.

### Examples

Input:  { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }
 
Output: Subarray with 0 sum exists
 
The sub-arrays with 0 sum are:
 
```
  { 3, 4, -7 }
  { 4, -7, 3 }
  { -7, 3, 1, 3 }
  { 3, 1, -4 }
  { 3, 1, 3, 1, -4, -2, -2 }
  { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }
```

### Solution

We can easily solve this problem in linear time by using hashing. The idea is to use set to check if sub-array with zero sum is present in the given array or not. We traverse the given array, and maintain sum of elements seen so far. If sum is seen before (i.e. sum exists in set), we return true as there exists at-least one sub-array with zero sum which ends at current index else we insert the sum into the set.

The time complexity of proposed solution is O(n) and auxiliary space used by the program is O(n).