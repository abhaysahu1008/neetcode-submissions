class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let left = Math.max(...weights);
        let right = weights.reduce((sum, w) => sum + w, 0);

        while (left < right) {
            const mid = Math.floor(left + (right - left) / 2);

            let daysNeeded = 1;
            let currentLoad = 0;

            for (const weight of weights) {
                if (currentLoad + weight > mid) {
                    daysNeeded++;
                    currentLoad = weight;
                } else {
                    currentLoad += weight;
                }
            }

            if (daysNeeded <= days) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }
}