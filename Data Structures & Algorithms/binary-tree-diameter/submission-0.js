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
    diameterOfBinaryTree(root) {
        let maxDiameter = 0;

        function height(node) {
            if (!node) return 0;

            // Recursively find the height of left and right subtrees
            const leftHeight = height(node.left);
            const rightHeight = height(node.right);

            // Update the global maximum diameter if the path through the current node is larger
            maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

            // Return the height of the current node
            return 1 + Math.max(leftHeight, rightHeight);
        }

        height(root);
        return maxDiameter;
    }
}