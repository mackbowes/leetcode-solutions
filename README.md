# leetcode-solutions

A collection of my solutions for LeetCode Challenges.

## [Arrays 101 (Fun With Arrays)](https://leetcode.com/explore/learn/card/fun-with-arrays/)

### [Max Consecutive Ones](https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/)
- Runtime: 84ms (>81.04% of JS Submissions)
- Memory Usage: 41.1mb (>72.47% of JS Submissions)
> Given a binary array, find the maximum number of consecutive 1s in this array.
```
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
```

### [Find Numbers with Even Number of Digits](https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/)
- Runtime: 80ms (>80% of JS Submissions)
- Memory Usage: 39mb (>89.70% of JS Submissions)
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

### [Squares of a Sorted Array](https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/)
- Runtime: 116ms (>85.07% of JS Submissions)
- Memory Usage: 45.5mb (>33.03% of JS Submissions) lol
- This one felt significantly more difficult than the others at the outset - grateful for the clutch array.sort() method
> Given an integer array `nums` sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
```
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
```
