class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let l = nums.length;
        let map = [];
        for(let i = 0; i < l; i++){
            if(map.includes(nums[i])){
                return true
            }else {
                map.push(nums[i]);
            }
        }return false
    } 
}