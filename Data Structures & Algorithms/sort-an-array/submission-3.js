class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        return nums.map((num)=>{
            return num;
        }).sort((a,b)=>a-b);
    }
}
