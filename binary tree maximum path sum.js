124. Binary Tree Maximum Path Sum
Hard

2826

240

Add to List

Share
Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//        -10
//    9          20
// null null  15     7
var maxPathSum = function(root) {
    let best = -Infinity
    function traverse(root) {
        if (!root) return 0
        let left = traverse(root.left)
        let right = traverse(root.right)
        let noChild = root.val
        let oneChild = Math.max(root.val + left, root.val + right)
        let twoChild = root.val + left + right
        best = Math.max(best, twoChild, oneChild, noChild)
        return Math.max(oneChild, noChild)
    }
    traverse(root)
    return best
}