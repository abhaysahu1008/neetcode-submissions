class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

        function backtrack(startIndex, currentCombination, currentSum) {
            // Base case: if we hit the target, add a copy of the combination to results
            if (currentSum === target) {
                result.push([...currentCombination]);
                return;
            }
            
            // Base case: if we exceed the target, stop exploring this branch
            if (currentSum > target) {
                return;
            }

            for (let i = startIndex; i < nums.length; i++) {
                // Choose the number
                currentCombination.push(nums[i]);
                
                // Explore: pass 'i' (not 'i + 1') to allow reusing the same element
                backtrack(i, currentCombination, currentSum + nums[i]);
                
                // Un-choose the number (backtrack)
                currentCombination.pop();
            }
        }

        backtrack(0, [], 0);
        return result;
    }
}