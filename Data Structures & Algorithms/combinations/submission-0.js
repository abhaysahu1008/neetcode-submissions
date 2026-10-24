class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const result = [];
        
        function backtrack(start, path) {
            // Base case: if the combination is of length k, add a copy to results
            if (path.length === k) {
                result.push([...path]);
                return;
            }
            
            // Pruning: only loop up to the point where we still have enough numbers left 
            // to fill the remaining slots (k - path.length).
            const need = k - path.length;
            for (let i = start; i <= n - need + 1; i++) {
                path.push(i);          // Choose
                backtrack(i + 1, path); // Explore
                path.pop();            // Un-choose (Backtrack)
            }
        }
        
        backtrack(1, []);
        return result;
    }
}