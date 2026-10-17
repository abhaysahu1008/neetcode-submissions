/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        // Base case: if the root is null, return null
        if (root === null) {
            return null;
        }
        
        // Recursively invert the left and right subtrees
        let leftInverted = this.invertTree(root.left);
        let rightInverted = this.invertTree(root.right);
        
        // Swap the left and right children
        root.left = rightInverted;
        root.right = leftInverted;
        
        return root;
    }
}