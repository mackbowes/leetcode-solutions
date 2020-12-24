/**
- Runtime: 84ms (>81.04% of JS Submissions)
- Memory Usage: 41.1mb (>72.47% of JS Submissions)
> Given a binary array, find the maximum number of consecutive 1s in this array.
```
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
```
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            a++;
        } else if (a > b) {
            b = a;
            a = 0;
        } else {
            a = 0;
        }
    }
    (b > a)
    ? null
    : b = a;
    return b;
};
