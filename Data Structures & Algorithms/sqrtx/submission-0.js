class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if (x < 2) return x;

        let left = 1;
        let right = Math.floor(x / 2);
        let ans = 0;

        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);

            if (mid * mid === x) {
                return mid;
            } else if (mid * mid < x) {
                ans = mid; // Store potential answer and look for larger candidates
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return ans;
    }
}