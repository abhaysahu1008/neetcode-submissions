class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums, k) {
        const sum = nums.reduce((acc, val) => acc + val, 0);
        
        // Total sum must be divisible by k
        if (sum % k !== 0) {
            return false;
        }
        
        const target = sum / k;
        
        // Sort in descending order to fail early and optimize backtracking
        nums.sort((a, b) => b - a);
        
        // If the largest element is greater than the target, it's impossible
        if (nums[0] > target) {
            return false;
        }
        
        const buckets = new Array(k).fill(0);
        
        const backtrack = (index) => {
            // Base case: all numbers have been successfully placed
            if (index === nums.length) {
                return true;
            }
            
            const val = nums[index];
            
            for (let i = 0; i < k; i++) {
                // Try putting the current number into the i-th bucket
                if (buckets[i] + val <= target) {
                    buckets[i] += val;
                    
                    if (backtrack(index + 1)) {
                        return true;
                    }
                    
                    // Backtrack
                    buckets[i] -= val;
                }
                
                // Optimization: if this bucket is empty, trying other empty buckets is redundant
                if (buckets[i] === 0) {
                    break;
                }
            }
            
            return false;
        };
        
        return backtrack(0);
    }
}