class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        const stack = []; // Stores pairs: [index, height]

        for (let i = 0; i < heights.length; i++) {
            let start = i;

            // Maintain monotonic increasing stack
            while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
                const [index, height] = stack.pop();
                maxArea = Math.max(maxArea, height * (i - index));
                start = index; // Extend current height back to where popped bar started
            }

            stack.push([start, heights[i]]);
        }

        // Process remaining bars in stack across the entire array length
        for (const [index, height] of stack) {
            maxArea = Math.max(maxArea, height * (heights.length - index));
        }

        return maxArea;
    }
}
