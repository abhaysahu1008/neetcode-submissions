class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        // If the main tree runs out of nodes, subRoot cannot be found
        if (!root) return false;
        
        // Check if the trees match starting from the current node
        if (this.isSameTree(root, subRoot)) return true;
        
        // Otherwise, recursively check the left and right subtrees
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    /**
     * Helper method to check if two trees are identical
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && !q) return true;
        if (!p || !q || p.val !== q.val) return false;
        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}