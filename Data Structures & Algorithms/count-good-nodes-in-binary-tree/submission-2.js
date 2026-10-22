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
    goodNodes(root) {
        let count = 0;

        const dfs = (node, maxSoFar) => {
            if (!node) return;

            // If the current node's value is greater than or equal to 
            // the maximum value seen so far on this path, it's a "good" node.
            if (node.val >= maxSoFar) {
                count++;
                maxSoFar = node.val; // Update the max value for child nodes
            }

            // Traverse left and right children
            dfs(node.left, maxSoFar);
            dfs(node.right, maxSoFar);
        };

        // Start DFS with the root's value as the initial maximum
        dfs(root, root.val);

        return count;
    }
}