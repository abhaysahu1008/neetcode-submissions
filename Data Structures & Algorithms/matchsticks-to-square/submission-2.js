class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        const sum = matchsticks.reduce((acc, val) => acc + val, 0);
        
        // Total sum must be divisible by 4, and we need at least 4 matchsticks
        if (matchsticks.length < 4 || sum % 4 !== 0) {
            return false;
        }
        
        const target = sum / 4;
        
        // Sort in descending order to fail early and optimize backtracking
        matchsticks.sort((a, b) => b - a);
        
        // If the longest matchstick is longer than the side, it's impossible
        if (matchsticks[0] > target) {
            return false;
        }
        
        const sides = [0, 0, 0, 0];
        
        const backtrack = (index) => {
            // Base case: all matchsticks have been successfully placed
            if (index === matchsticks.length) {
                return sides[0] === target && sides[1] === target && sides[2] === target;
            }
            
            const match = matchsticks[index];
            
            for (let i = 0; i < 4; i++) {
                // Try putting the current matchstick into the i-th side
                if (sides[i] + match <= target) {
                    sides[i] += match;
                    
                    if (backtrack(index + 1)) {
                        return true;
                    }
                    
                    // Backtrack
                    sides[i] -= match;
                }
                
                // Optimization: if this side is empty, trying other empty sides is redundant
                if (sides[i] === 0) {
                    break;
                }
            }
            
            return false;
        };
        
        return backtrack(0);
    }
}