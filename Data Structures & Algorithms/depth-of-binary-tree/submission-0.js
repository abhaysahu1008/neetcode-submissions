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
     * @return {number}
     */
    maxDepth(root) {
        // Base case: if the root is null, the depth is 0
        if (root === null) {
            return 0;
        }
        
        // Recursively find the depth of the left and right subtrees
        let leftDepth = this.maxDepth(root.left);
        let rightDepth = this.maxDepth(root.right);
        
        // The max depth is the greater of the two depths plus 1 for the current node
        return Math.max(leftDepth, rightDepth) + 1;
    }
}