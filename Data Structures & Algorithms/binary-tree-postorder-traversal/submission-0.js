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
     * @return {number[]}
     */
    postorderTraversal(root) {
        if (!root) return [];
        
        const result = [];
        const stack = [root];
        
        while (stack.length > 0) {
            const node = stack.pop();
            result.push(node.val);
            
            // Push left first, then right. 
            // Since it's a stack (LIFO), left will be popped and processed before right,
            // resulting in Root -> Right -> Left order, which we reverse at the end.
            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }
        
        // Reverse Root -> Right -> Left to get Left -> Right -> Root (Postorder)
        return result.reverse();
    }
}