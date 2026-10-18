class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (!s || !t || s.length < t.length) return "";

        // Frequency map for characters in t
        const tCount = new Map();
        for (const char of t) {
            tCount.set(char, (tCount.get(char) || 0) + 1);
        }

        let required = tCount.size; // Number of unique characters to match
        let formed = 0;             // Number of unique characters matched so far
        
        // Window pointers and result tracking [length, left, right]
        let left = 0, right = 0;
        let ans = [-1, 0, 0]; // [minLength, start, end]
        
        const windowCounts = new Map();

        while (right < s.length) {
            let char = s[right];
            windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

            // If the current character's frequency matches its frequency in t, increment 'formed'
            if (tCount.has(char) && windowCounts.get(char) === tCount.get(char)) {
                formed++;
            }

            // Try and contract the window until it ceases to be 'desirable'
            while (left <= right && formed === required) {
                char = s[left];

                // Update our result if this window is smaller than the previous smallest
                if (ans[0] === -1 || (right - left + 1) < ans[0]) {
                    ans[0] = right - left + 1;
                    ans[1] = left;
                    ans[2] = right;
                }

                // The character at the left pointer is about to be excluded from the window
                windowCounts.set(char, windowCounts.get(char) - 1);
                if (tCount.has(char) && windowCounts.get(char) < tCount.get(char)) {
                    formed--;
                }

                left++;
            }

            right++;
        }

        return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1);
    }
}