class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.capacity = k;
        this.queue = new Array(k);
        this.head = 0;
        this.tail = -1;
        this.count = 0;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.isFull()) {
            return false;
        }
        this.tail = (this.tail + 1) % this.capacity;
        this.queue[this.tail] = value;
        this.count++;
        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if (this.isEmpty()) {
            return false;
        }
        this.head = (this.head + 1) % this.capacity;
        this.count--;
        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.queue[this.head];
    }

    /**
     * @return {number}
     */
    Rear() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.queue[this.tail];
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.count === 0;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.count === this.capacity;
    }
}