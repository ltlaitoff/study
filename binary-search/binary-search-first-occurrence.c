#include <math.h>

int binarySearchForFirstOccurrence(int* nums, int numsSize, int target) {
    int low = 0;
    int high = numsSize - 1;

    while (low <= high) {
        double midIndex = low + (high - low) / 2.0;
        int mid = floor(midIndex);

        if (nums[mid] < target) {
            low = mid + 1;
            continue;
        }

        if (nums[mid] > target) {
            high = mid - 1;
            continue;
        }

        if (low != mid) {
            high = mid;
            continue;
        }

        return mid;
    }

    return -1;
}

