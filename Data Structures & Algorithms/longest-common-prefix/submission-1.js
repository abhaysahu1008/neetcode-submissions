class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        
        let result = "";

        for(let i=0;i<strs[0].length;i++){

            let currChar=strs[0][i];
            for(let j=1;j<strs.length;j++){

                if(i>=strs[j].length || strs[j][i]!==currChar){
                    return result;
                }
            }

            result+=currChar;
        }
        return result;
    }
}
