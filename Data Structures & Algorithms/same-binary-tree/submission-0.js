class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // Base case 1: Both nodes are null, meaning we reached the end of matching branches
        if (!p && !q) return true;
        
        // Base case 2: One node is null while the other isn't, or their values don't match
        if (!p || !q || p.val !== q.val) return false;
        
        // Recursively check both the left and right subtrees
        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}