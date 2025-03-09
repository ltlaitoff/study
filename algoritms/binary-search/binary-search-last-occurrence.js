/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number} index or -1 if nothing found
 */
var binarySearchLastOccurrence = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = Math.ceil(low + (high - low) / 2)
        const value = nums[mid]
       
        if (value < target) {
            low = mid + 1;
            continue;
        }

        if (value > target) {
            high = mid - 1;
            continue;
        }

        if (high != mid) {
            low = mid;
            continue;
        }

        return mid
    }

    return -1
}
