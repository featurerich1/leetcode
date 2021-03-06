// 1. First Missing Positive
// Hard

// 2964

// 745

// Add to List

// Share
// Given an unsorted integer array, find the smallest missing positive integer.

//     Example 1:

// Input: [1, 2, 0]
// Output: 3
// Example 2:

// Input: [3, 4, -1, 1]
// Output: 2
// Example 3:

// Input: [7, 8, 9, 11, 12]
// Output: 1
// Note:

// Your algorithm should run in O(n) time and uses constant extra space.
/**
 * @param {number[]} nums
 * @return {number}
 */
//[1,2,3] length = 3, 


var firstMissingPositive = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] > 0 & nums[i] < nums.length & nums[i] !== nums[nums[i]-1]) { // & is && when only dealing with booleans so little fun thing here
            [nums[nums[i]-1], nums[i]] = [nums[i],  nums[nums[i]-1]]
        }
        
        // if (nums[i] <= 0 || nums[i] > nums.length || nums[i] === nums[nums[i]-1]) continue

//         if (nums[nums[i]-1] <= i){
//             [nums[nums[i]-1], nums[i]] = [nums[i],  nums[nums[i]-1]] 
//             i--

//         } else {
//             [nums[nums[i]-1], nums[i]] = [nums[i],  nums[nums[i]-1]] 

//         }

        
    }
    let i = 0
    while (nums[i] === i+1) {
        i++
    }

    return i+1
    
};

// still dont understand this modulus addition commutativity approach
 // def firstMissingPositive(self, nums):
 //    """
 //    :type nums: List[int]
 //    :rtype: int
 //     Basic idea:
 //    1. for any array whose length is l, the first missing positive must be in range [1,...,l+1], 
 //        so we only have to care about those elements in this range and remove the rest.
 //    2. we can use the array index as the hash to restore the frequency of each number within 
 //         the range [1,...,l+1] 
 //    """
 //    nums.append(0)
 //    n = len(nums)
 //    for i in range(len(nums)): #delete those useless elements
 //        if nums[i]<0 or nums[i]>=n:
 //            nums[i]=0
 //    for i in range(len(nums)): #use the index as the hash to record the frequency of each number
 //        nums[nums[i]%n]+=n
 //    for i in range(1,len(nums)):
 //        if nums[i]/n==0:
 //            return i
 //    return n

