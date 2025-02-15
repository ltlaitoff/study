/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = Math.round((high + low) / 2)
        const guess = nums[mid]

        if (guess === target) {
            return mid
        }

        if (guess < target) {
            low = mid + 1;
            continue;
        }

        if (guess > target) {
            high = mid - 1;
            continue;
        }
    }

    return -1;
};
