/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {if (!head || !head.next) {
        return false;
    }

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;         // Move slow pointer by 1 step
        fast = fast.next.next;    // Move fast pointer by 2 steps

        // If the two pointers meet, a cycle exists
        if (slow === fast) {
            return true;
        }
    }

    // Fast pointer reached the end, so no cycle
    return false;}
}
