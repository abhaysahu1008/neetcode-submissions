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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        if (!head || left === right) {
            return head;
        }

        // Create a dummy node to handle edge cases where `left` = 1
        const dummy = new ListNode(0, head);
        let prev = dummy;

        // 1. Move `prev` to the node right before the `left` position
        for (let i = 0; i < left - 1; i++) {
            prev = prev.next;
        }

        // 2. `current` points to the first node of the sublist to be reversed
        let current = prev.next;
        let subListPrev = null;
        let nextNode = null;

        // 3. Reverse the sublist from `left` to `right`
        for (let i = 0; i <= right - left; i++) {
            nextNode = current.next;
            current.next = subListPrev;
            subListPrev = current;
            current = nextNode;
        }

        // 4. Reconnect the reversed sublist with the rest of the list
        // `prev.next` was the original start of the sublist, now it's the tail
        prev.next.next = current; // `current` is now the node at `right + 1`
        prev.next = subListPrev;   // `subListPrev` is now the new head of the reversed sublist

        return dummy.next;
    }
}