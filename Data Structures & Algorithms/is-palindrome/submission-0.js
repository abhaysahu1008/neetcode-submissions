class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newStr = "";
        for (let i = 0; i < s.length; i++) {
            const ch = s[i];

            if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z") || (ch >= "0" && ch <= "9")) {
                newStr += ch.toLowerCase();
            }
        }
        let revStr = "";
        for (let i = 0; i < newStr.length; i++) {
            revStr += newStr[newStr.length - i - 1];
        }

        if (newStr.toLowerCase() === revStr.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
}
