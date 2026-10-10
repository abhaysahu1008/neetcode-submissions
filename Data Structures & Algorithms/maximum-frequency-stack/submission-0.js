class FreqStack {
    constructor() {
        this.freqMap = new Map();  // Maps val -> frequency
        this.groupMap = new Map(); // Maps frequency -> array of values (stack)
        this.maxFreq = 0;          // Tracks the maximum frequency currently in the stack
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        // 1. Get current frequency of val, increment it
        const freq = (this.freqMap.get(val) || 0) + 1;
        this.freqMap.set(val, freq);
        
        // 2. Update maxFreq if this frequency is higher than current max
        if (freq > this.maxFreq) {
            this.maxFreq = freq;
        }
        
        // 3. Push the value into the corresponding frequency stack in groupMap
        if (!this.groupMap.has(freq)) {
            this.groupMap.set(freq, []);
        }
        this.groupMap.get(freq).push(val);
    }

    /**
     * @return {number}
     */
    pop() {
        // 1. Get the stack of elements corresponding to the max frequency
        const maxFreqStack = this.groupMap.get(this.maxFreq);
        
        // 2. Pop the most recent element with the maximum frequency
        const val = maxFreqStack.pop();
        
        // 3. Decrement its frequency in freqMap
        this.freqMap.set(val, this.freqMap.get(val) - 1);
        
        // 4. If the stack for maxFreq becomes empty, decrement maxFreq
        if (maxFreqStack.length === 0) {
            this.maxFreq--;
        }
        
        return val;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */