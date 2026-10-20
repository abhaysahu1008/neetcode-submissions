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
     * @return {boolean}
     */
    isBalanced(root) {
        return this.checkHeight(root) !== -1;
    }

    /**
     * Helper function to return height if balanced, or -1 if unbalanced.
     * @param {TreeNode} node
     * @return {number}
     */
    checkHeight(node) {
        if (!node) return 0;

        // Check left subtree height
        const leftHeight = this.checkHeight(node.left);
        if (leftHeight === -1) return -1;

        // Check right subtree height
        const rightHeight = this.checkHeight(node.right);
        if (rightHeight === -1) return -1;

        // If the current node is unbalanced, return -1
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        // Return the actual height of the current node
        return 1 + Math.max(leftHeight, rightHeight);
    }
}