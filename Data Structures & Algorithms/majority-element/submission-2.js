class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let maxElement = null;
        let max=null;
        let count = {};
        
        for (let i = 0; i < nums.length; i++) {
            count[nums[i]] = (count[nums[i]] || 0) + 1;
        }
        for(let j=0;j<nums.length;j++){
            if(count[nums[j]]>max){
                max=count[nums[j]];
                maxElement = nums[j];
            }
        }
        return maxElement;
    }

}
