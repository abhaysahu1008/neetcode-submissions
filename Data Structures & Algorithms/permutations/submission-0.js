class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];
        
        function backtrack(path, used) {
            // Base case: if the path length equals nums length, we have a full permutation
            if (path.length === nums.length) {
                result.push([...path]);
                return;
            }
            
            for (let i = 0; i < nums.length; i++) {
                if (used[i]) continue; // Skip if element is already used in this path
                
                used[i] = true;
                path.push(nums[i]);
                
                backtrack(path, used);
                
                // Backtrack (un-choose)
                path.pop();
                used[i] = false;
            }
        }
        
        backtrack([], new Array(nums.length).fill(false));
        return result;
    }
}