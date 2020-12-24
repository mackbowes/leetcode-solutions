/**
- Runtime: 92ms (>63.08% of JS Submissions)
- Memory Usage: 40.3mb (>69.54% of JS Submissions)
- TODO: refactor code without using standard Javascript functions to see if performance improves
> Given a fixed length array `arr` of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
> Note that elements beyond the length of the original array are not written.
> Do the above modifications to the input array in place, do not return anything from your function.
```
Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
```
*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr.splice(i,0,arr[i]);
            arr.pop();
            i++;
        }
    }
};
