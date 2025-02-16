/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number} index or -1 if nothing found
 */
var binarySearchFirstOccurrence = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2)
        const value = nums[mid]

        if (value < target) {
            low = mid + 1;
            continue;
        }

        if (value > target) {
            high = mid - 1;
            continue;
        }

        // if current value is target and mid is not low - it's not first
        if (low != mid) {
            high = mid;
            continue;
        }

        return mid
    }

    return -1
}
