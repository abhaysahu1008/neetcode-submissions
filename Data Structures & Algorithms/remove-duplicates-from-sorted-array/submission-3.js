class Solution {
    removeDuplicates(nums) {
        if (nums.length === 0) return 0;
        
        let i = 0; // Points to the last unique element found
        
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] !== nums[i]) {
                i++;
                nums[i] = nums[j]; // Move the unique element forward
            }
        }
        
        return i + 1; // Length of array with unique elements
    }
}