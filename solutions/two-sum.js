/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/


//Time Complexity: 0(n^2)
//Space Complexity: 0(1)
var twoSumBruteForce = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i , j];
            }
        }
    }
};

/*
1. We use one loop but with a Map to find the pair of number
2. We will check if the other number exist in map
3. If other number exist then we will fetch its index
4. Else if number does not exist then we will add the current number with its index in map
    because when the other number comes in the array then we will be able to fetch the current number
    and able to return its index
*/

//Time Complexity: 0(n)
//Space Complexity: 0(n)
var twoSum = function(nums, target) {
    let store = new Map();
    
    for(let i = 0; i < nums.length; i++){
        let currentNumber = nums[i];
        let numberToFind = target - currentNumber;
        
        if(store.has(numberToFind)){
            return [store.get(numberToFind), i];
        }
        else if(!store.has(currentNumber)) {
            store.set(currentNumber, i);
        }
    }
};