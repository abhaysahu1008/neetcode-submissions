class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        // Max-Heap implementation
        const heap = [];

        const push = (val) => {
            heap.push(val);
            let i = heap.length - 1;
            while (i > 0) {
                let p = Math.floor((i - 1) / 2);
                if (heap[i] <= heap[p]) break;
                [heap[i], heap[p]] = [heap[p], heap[i]];
                i = p;
            }
        };

        const pop = () => {
            if (heap.length === 0) return null;
            if (heap.length === 1) return heap.pop();
            const top = heap[0];
            heap[0] = heap.pop();
            let i = 0;
            const len = heap.length;
            while (true) {
                let l = 2 * i + 1, r = 2 * i + 2, max = i;
                if (l < len && heap[l] > heap[max]) max = l;
                if (r < len && heap[r] > heap[max]) max = r;
                if (max === i) break;
                [heap[i], heap[max]] = [heap[max], heap[i]];
                i = max;
            }
            return top;
        };

        // 1. Build Max-Heap
        for (const stone of stones) {
            push(stone);
        }

        // 2. Smash stones
        while (heap.length > 1) {
            const y = pop(); // Largest stone
            const x = pop(); // Second largest stone

            if (y !== x) {
                push(y - x);
            }
        }

        // 3. Return remaining stone or 0
        return heap.length === 1 ? heap[0] : 0;
    }
}