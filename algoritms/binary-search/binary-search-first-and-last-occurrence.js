/**
 * @param {number[]} nums
 * @param {number} target
 * @param {boolean} first occurrence. If true - first first occurrence, if false - find last one
 * @return {number} index or -1 if nothing found
 */
var binarySearchByOccurrence = function (nums, target, first = true) {
    const round = first ? Math.floor : Math.ceil

    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = round(low + (high - low) / 2)

        if (nums[mid] < target) {
            low = mid + 1;
            continue;
        }

        if (nums[mid] > target) {
            high = mid - 1;
            continue;
        }

        if (first && low != mid) {
            high = mid;
            continue;
        }

        if (!first && high != mid) {
            low = mid;
            continue;
        }

        return mid
    }

    return -1
}
