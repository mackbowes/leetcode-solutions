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
