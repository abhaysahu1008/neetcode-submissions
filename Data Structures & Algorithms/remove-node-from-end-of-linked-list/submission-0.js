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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // Dummy node helps handle deleting the head node effortlessly
        let dummy = new ListNode(0, head);
        let fast = dummy;
        let slow = dummy;

        // Move fast pointer n + 1 steps ahead to create an n-node gap
        for (let i = 0; i <= n; i++) {
            fast = fast.next;
        }

        // Move both pointers until fast reaches the end
        while (fast !== null) {
            fast = fast.next;
            slow = slow.next;
        }

        // Unlink the nth node from the end
        slow.next = slow.next.next;

        return dummy.next;
    }
}