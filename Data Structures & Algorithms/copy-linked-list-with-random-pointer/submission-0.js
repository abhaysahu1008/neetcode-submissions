// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {if (!head) return null;

    // Step 1: Interleave cloned nodes with original nodes
    // Original: A -> B -> C
    // Result:   A -> A' -> B -> B' -> C -> C'
    let curr = head;
    while (curr !== null) {
        let copy = new Node(curr.val, curr.next, null);
        curr.next = copy;
        curr = copy.next;
    }

    // Step 2: Assign random pointers for the cloned nodes
    curr = head;
    while (curr !== null) {
        if (curr.random !== null) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }

    // Step 3: Separate the original list and the cloned list
    curr = head;
    let dummy = new Node(0);
    let copyCurr = dummy;

    while (curr !== null) {
        let nextOriginal = curr.next.next;
        
        // Extract copy node
        copyCurr.next = curr.next;
        copyCurr = copyCurr.next;

        // Restore original node connection
        curr.next = nextOriginal;

        curr = nextOriginal;
    }

    return dummy.next;}
}
