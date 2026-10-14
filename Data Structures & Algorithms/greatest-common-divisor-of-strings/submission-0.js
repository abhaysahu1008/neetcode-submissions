class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    gcdOfStrings(str1, str2) {
        // If concatenating them in different orders doesn't match, no common divisor exists
        if (str1 + str2 !== str2 + str1) {
            return "";
        }
        
        // Helper function to find the greatest common divisor of two numbers
        const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
        
        // The length of the greatest common divisor string
        const gcdLength = gcd(str1.length, str2.length);
        
        // Return the prefix of str1 of length gcdLength
        return str1.substring(0, gcdLength);
    }
}