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
