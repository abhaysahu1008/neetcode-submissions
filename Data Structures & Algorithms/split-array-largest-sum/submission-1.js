class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let left = Math.max(...nums);
        let right = nums.reduce((a, b) => a + b, 0);

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            let pieces = 1;
            let currentSum = 0;

            for (const num of nums) {
                if (currentSum + num > mid) {
                    pieces++;
                    currentSum = num;
                } else {
                    currentSum += num;
                }
            }

            if (pieces > k) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }
}