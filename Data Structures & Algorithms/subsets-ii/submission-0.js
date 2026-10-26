class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const result = [];
        // Sort the array to group duplicates together
        nums.sort((a, b) => a - b);
        
        const backtrack = (start, path) => {
            // Push a copy of the current subset to results
            result.push([...path]);
            
            for (let i = start; i < nums.length; i++) {
                // Skip duplicate elements at the same tree level to avoid duplicate subsets
                if (i > start && nums[i] === nums[i - 1]) continue;
                
                path.push(nums[i]);
                backtrack(i + 1, path);
                path.pop();
            }
        };
        
        backtrack(0, []);
        return result;
    }
}