class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root) {
        const result = [];
        
        const traverse = (node) => {
            if (!node) return;
            traverse(node.left);     // 1. Visit left subtree
            result.push(node.val);   // 2. Visit root node
            traverse(node.right);    // 3. Visit right subtree
        };
        
        traverse(root);
        return result;
    }
}