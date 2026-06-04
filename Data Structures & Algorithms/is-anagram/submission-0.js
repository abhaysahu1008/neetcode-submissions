class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const freq = new Map();
        for (let i = 0; i < s.length; i++) {
            freq.set(s[i], (freq.get(s[i]) || 0) + 1);
        }

        for (let i = 0; i < t.length; i++) {
            if (!freq.has(t[i])) {
                return false;
            }

            freq.set(t[i], freq.get(t[i]) - 1);

            if(freq.get(t[i])<0){
                return false
            }
        }
        return true;
    }
}
