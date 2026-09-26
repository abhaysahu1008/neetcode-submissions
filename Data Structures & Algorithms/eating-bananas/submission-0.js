class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {let left = 1;
  let right = Math.max(...piles);
  let result = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Calculate total hours needed at speed `mid`
    let hoursNeeded = 0;
    for (const pile of piles) {
      hoursNeeded += Math.ceil(pile / mid);
    }

    if (hoursNeeded <= h) {
      result = mid;     // Try to find a smaller speed
      right = mid - 1;
    } else {
      left = mid + 1;  // Speed is too slow, increase it
    }
  }

  return result;}
}
