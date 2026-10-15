class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const countStack = [];
        const stringStack = [];
        let currentString = "";
        let k = 0;

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (!isNaN(char) && char !== ' ') {
                // Handle multi-digit numbers (e.g., "12[a]")
                k = k * 10 + Number(char);
            } else if (char === '[') {
                // Push current state to stacks before entering the bracket
                countStack.push(k);
                stringStack.push(currentString);
                // Reset for the inner string
                k = 0;
                currentString = "";
            } else if (char === ']') {
                // Pop the count and the previous string, then build the decoded segment
                const repeatTimes = countStack.pop();
                const prevString = stringStack.pop();
                currentString = prevString + currentString.repeat(repeatTimes);
            } else {
                // Regular character, append to the current string
                currentString += char;
            }
        }

        return currentString;
    }
}