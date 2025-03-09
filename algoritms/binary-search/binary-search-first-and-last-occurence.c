#include <stdbool.h>
#include <math.h>

int binarySearchForOccurrence(int* nums, int numsSize, int target, bool first) {
    int low = 0;
    int high = numsSize - 1;

    while (low <= high) {
        double midIndex = low + (high - low) / 2.0;
        int mid = first ? floor(midIndex) : ceil(midIndex);

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

        return mid;
    }

    return -1;
}
