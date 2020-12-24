/**
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
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= nums[i];
    }
    nums.sort(function(a, b){return a - b})
    return nums;
};
