700. Search in a Binary Search Tree
Easy

579

108

Add to List

Share
Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

For example, 

Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2
You should return this subtree:

      2     
     / \   
    1   3
In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.

Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    // VALUE =  val || VALUE
    VALUE = val || VALUE
    
    if (!root) return null
    
    // if (root.val === val) return root
    // let right = searchBST(root.right, val)
    // let left = searchBST(root.left, val)
    // return left || right
    
    if (root.val === VALUE) {
        return root
    } else if (root.val > VALUE) {
        return searchBST(root.left)
    } else {
        return searchBST(root.right)
    }

};
