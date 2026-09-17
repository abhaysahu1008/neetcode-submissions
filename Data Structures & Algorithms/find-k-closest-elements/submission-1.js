class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let left = 0;
    let right = arr.length - k;

    // Binary search for the optimal starting window of size k
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        // If the element further right is closer to x than the current left element,
        // shift our window to the right.
        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    // Extract the k elements starting from 'left'
    return arr.slice(left, left + k);
    }
}
