class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        return [...nums].sort((a, b) => a - b);
    }
}
