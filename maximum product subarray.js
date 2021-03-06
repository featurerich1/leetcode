// 152. Maximum Product Subarray
// Medium

// 3238

// 136

// Add to List

// Share
// Given an integer array nums, find the contiguous subarray within an array(containing at least one number) which has the largest product.

//     Example 1:

// Input: [2, 3, -2, 4]
// Output: 6
// Explanation: [2, 3] has the largest product 6.
// Example 2:

// Input: [-2, 0, -1]
// Output: 0
// Explanation: The result cannot be 2, because[-2, -1] is not a subarray.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {

    let answer = -Infinity
    let rollingmax = 1
    let rollingmin = 1
    for (let i = 0; i < nums.length; i++) {
        [rollingmax, rollingmin] = [Math.max(nums[i], rollingmax * nums[i], rollingmin * nums[i]), Math.min(nums[i], rollingmax * nums[i], rollingmin * nums[i])]
        answer = Math.max(answer, rollingmax)
    }
    return answer
};



console.log(maxProduct([2,3,-2,4],6))