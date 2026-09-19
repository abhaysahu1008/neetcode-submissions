class Solution {
    removeDuplicates(nums) {
        if (nums.length === 0) return 0;

        let temp = [];
        temp[0] = nums[0];
        let t = 1;

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[i - 1]) {
                temp[t] = nums[i];
                t++;
            }
        }

        for (let k = 0; k < t; k++) {
            nums[k] = temp[k];
        }

        return t;
    }
}
