### Problem

Print all sub-arrays with 0 sum
 
Given an array of integers, print all sub-arrays with 0 sum.

### Examples

Input:  { 4, 2, -3, -1, 0, 4 }
 
Sub-arrays with 0 sum are
 
{ -3, -1, 0, 4 }
{ 0 }
 
 
Input:  { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }
 
Sub-arrays with 0 sum are
 
{ 3, 4, -7 }
{ 4, -7, 3 }
{ -7, 3, 1, 3 }
{ 3, 1, -4 }
{ 3, 1, 3, 1, -4, -2, -2 }
{ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }

### Solution

Approach 1: Naive solution
 

Naive solution would be to consider all sub-arrays and find its sum. If sub-array sum is equal to 0, we print it. The time complexity of naive solution is O(n3) as there are n2 sub-arrays and it takes O(n) time to find sum of its elements. The method can be optimized to run in O(n2) time by calculating sub-array sum in constant time.

Approach 2: Using multimap to print all subarrays
 

We can use MultiMap to print all sub-arrays with 0 sum present in the given array. The idea is to create an empty multimap to store ending index of all sub-arrays having given sum. We traverse the given array, and maintain sum of elements seen so far. If sum is seen before, there exists at-least one sub-array with 0 sum which ends at current index and we print all such sub-arrays.