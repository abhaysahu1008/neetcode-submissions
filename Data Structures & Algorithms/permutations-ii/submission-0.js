class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        const result = [];
        // Sort the array to group duplicates together
        nums.sort((a, b) => a - b);
        const used = new Array(nums.length).fill(false);
        
        const backtrack = (path) => {
            if (path.length === nums.length) {
                result.push([...path]);
                return;
            }
            
            for (let i = 0; i < nums.length; i++) {
                // Skip if the element is already used in the current path
                if (used[i]) continue;
                
                // Skip duplicates: if current element equals the previous one,
                // and the previous one was NOT used yet in this branch, skip it.
                if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
                
                used[i] = true;
                path.push(nums[i]);
                backtrack(path);
                path.pop();
                used[i] = false;
            }
        };
        
        backtrack([]);
        return result;
    }
}