class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        // Step 1: Count frequency of each task
        const freqMap = new Map();
        let maxFreq = 0;

        for (const task of tasks) {
            const count = (freqMap.get(task) || 0) + 1;
            freqMap.set(task, count);
            maxFreq = Math.max(maxFreq, count);
        }

        // Step 2: Count how many tasks have the maximum frequency
        let maxFreqCount = 0;
        for (const count of freqMap.values()) {
            if (count === maxFreq) {
                maxFreqCount++;
            }
        }

        // Step 3: Calculate the minimum required time frame
        const frameSize = (maxFreq - 1) * (n + 1) + maxFreqCount;

        // Step 4: The answer is at least the number of total tasks
        return Math.max(tasks.length, frameSize);
    }
}