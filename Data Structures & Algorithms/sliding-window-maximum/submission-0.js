class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = [];
        const deque = []; // Stores indices of elements

        for (let i = 0; i < nums.length; i++) {
            // Remove indices that are out of the current sliding window
            if (deque.length > 0 && deque[0] < i - k + 1) {
                deque.shift();
            }

            // Remove elements from the back of the deque that are smaller than the current element
            // because they will never be the maximum as long as nums[i] is in the window
            while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
                deque.pop();
            }

            // Add the current element's index to the deque
            deque.push(i);

            // Once we have processed at least k elements, start recording the maximums
            if (i >= k - 1) {
                result.push(nums[deque[0]]);
            }
        }

        return result;
    }
}