class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = [];
        
        // Sort the candidates to easily handle duplicates and stop early
        candidates.sort((a, b) => a - b);

        function backtrack(startIndex, currentCombination, currentSum) {
            // Base case: target reached
            if (currentSum === target) {
                result.push([...currentCombination]);
                return;
            }

            for (let i = startIndex; i < candidates.length; i++) {
                // If the current number exceeds the remaining target, 
                // since the array is sorted, all subsequent numbers will too. We can break.
                if (currentSum + candidates[i] > target) {
                    break;
                }

                // Skip duplicates at the same tree level
                if (i > startIndex && candidates[i] === candidates[i - 1]) {
                    continue;
                }

                // Choose
                currentCombination.push(candidates[i]);

                // Explore: use 'i + 1' because each element can be used only once
                backtrack(i + 1, currentCombination, currentSum + candidates[i]);

                // Un-choose (backtrack)
                currentCombination.pop();
            }
        }

        backtrack(0, [], 0);
        return result;
    }
}