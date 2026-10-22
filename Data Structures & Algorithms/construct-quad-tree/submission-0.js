/**
 * // Definition for a QuadTree node.
 * class Node {
 *     constructor(val = false, isLeaf = false, topLeft = null, topRight = null, bottomLeft = null, bottomRight = null) {
 *         this.val = val;
 *         this.isLeaf = isLeaf;
 *         this.topLeft = topLeft;
 *         this.topRight = topRight;
 *         this.bottomLeft = bottomLeft;
 *         this.bottomRight = bottomRight;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[][]} grid
     * @return {Node}
     */
    construct(grid) {
        const dfs = (r, c, len) => {
            // Check if all elements in the current region are the same
            let allSame = true;
            const val = grid[r][c];

            for (let i = r; i < r + len; i++) {
                for (let j = c; j < c + len; j++) {
                    if (grid[i][j] !== val) {
                        allSame = false;
                        break;
                    }
                }
                if (!allSame) break;
            }

            // If uniform, return a leaf node
            if (allSame) {
                return new Node(val === 1, true, null, null, null, null);
            }

            // Otherwise, divide into 4 equal quadrants
            const half = len / 2;
            const topLeft = dfs(r, c, half);
            const topRight = dfs(r, c + half, half);
            const bottomLeft = dfs(r + half, c, half);
            const bottomRight = dfs(r + half, c + half, half);

            // Return a non-leaf node with its 4 children
            return new Node(true, false, topLeft, topRight, bottomLeft, bottomRight);
        };

        return dfs(0, 0, grid.length);
    }
}