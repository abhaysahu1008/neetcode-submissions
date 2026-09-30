class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];

        for (let asteroid of asteroids) {
            let destroyed = false;

            // Collision only happens if the current asteroid is moving left (< 0) 
            // and the previous asteroid on top of the stack is moving right (> 0)
            while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
                const top = stack[stack.length - 1];

                if (Math.abs(asteroid) > top) {
                    // Top asteroid explodes, continue checking stack
                    stack.pop();
                } else if (Math.abs(asteroid) === top) {
                    // Both explode
                    stack.pop();
                    destroyed = true;
                    break;
                } else {
                    // Current asteroid explodes
                    destroyed = true;
                    break;
                }
            }

            // If current asteroid wasn't destroyed in a collision, add to stack
            if (!destroyed) {
                stack.push(asteroid);
            }
        }

        return stack;
    }
}