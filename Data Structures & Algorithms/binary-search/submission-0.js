class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // Prevents overflow compared to Math.floor((left + right) / 2)
        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;}
}
