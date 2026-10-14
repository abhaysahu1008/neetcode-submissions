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
     * @return {ListNode}
     */
    insertGreatestCommonDivisors(head) {
        // Helper function to find the greatest common divisor of two numbers
        const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

        let curr = head;

        // Traverse the list until we reach the last node
        while (curr !== null && curr.next !== null) {
            let n1 = curr.val;
            let n2 = curr.next.val;

            // Calculate GCD of adjacent node values
            let gcdVal = gcd(n1, n2);

            // Create a new node with the GCD value
            let gcdNode = new ListNode(gcdVal);

            // Insert the new node between curr and curr.next
            gcdNode.next = curr.next;
            curr.next = gcdNode;

            // Move forward, skipping past the inserted node to the original next node
            curr = gcdNode.next;
        }

        return head;
    }
}