/**
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
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let a = 0;
    for (let i = 0; i < nums.length; i++) {
        let b = Math.floor(Math.log10(nums[i]));
        if (((b % 2) == 1) && (b != 0)) {
            a++;
        }
    }
    return a;
};
