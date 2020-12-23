# leetcode-solutions

A collection of my solutions for LeetCode Challenges.

## Arrays (Fun With Arrays)

### Max Consecutive Ones
> Given a binary array, find the maximum number of consecutive 1s in this array.
```
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
```

### Find Numbers with Even Number of Digits
> Given an array `nums` of integers, return how many of them contain an even number of digits.

```
Input: nums = [12,345,2,6,7896]
Output: 2
Explanation:
12 contains 2 digits (even number of digits).
345 contains 3 digits (odd number of digits).
2 contains 1 digit (odd number of digits).
6 contains 1 digit (odd number of digits).
7896 contains 4 digits (even number of digits).
Therefore only 12 and 7896 contain an even number of digits.
```

### Squares of a Sorted Array
Runtime: 116ms (>85.07% of JS Submissions)
Memory Usage: 45.5mb (>33.03% of JS Submissions) lol
> Given an integer array `nums` sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
```
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
```
