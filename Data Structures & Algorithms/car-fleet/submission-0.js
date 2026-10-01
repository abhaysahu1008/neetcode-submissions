class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const n = position.length;
            if (n === 0) return 0;

                // Pair positions with their corresponding speeds
                    const cars = new Array(n);
                        for (let i = 0; i < n; i++) {
                                cars[i] = {
                                            pos: position[i],
                                                        time: (target - position[i]) / speed[i]
                                                                };
                                                                    }

                                                                        // Sort cars by starting position in descending order (closest to target first)
                                                                            cars.sort((a, b) => b.pos - a.pos);

                                                                                let fleets = 0;
                                                                                    let maxTime = 0;

                                                                                        // Iterate through sorted cars
                                                                                            for (const car of cars) {
                                                                                                    // If current car takes strictly more time than the leading fleet ahead,
                                                                                                            // it forms a new fleet.
                                                                                                                    if (car.time > maxTime) {
                                                                                                                                fleets++;
                                                                                                                                            maxTime = car.time;
                                                                                                                                                    }
                                                                                                                                                            // Otherwise, it catches up to the fleet ahead and merges.
                                                                                                                                                                }

                                                                                                                                                                    return fleets;
    }
}
