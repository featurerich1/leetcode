// 344. Reverse String
// Easy

// 1192

// 646

// Add to List

// Share
// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

 

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
// Accepted
// 642,829
// Submissions
// 971,141
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s){
    let length = s.length
    let neededSwaps = length >> 1
    function recursion(index){
        if (index === neededSwaps) {}
        else {
            [ s[length - 1 - index], s[index] ] = [ s[index] , s[length - 1 - index] ] 
            recursion(index + 1)
        }
    }
    recursion(0)
}
