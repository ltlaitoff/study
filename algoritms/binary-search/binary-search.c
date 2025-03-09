int search(int* nums, int numsSize, int target) {
    int low = 0;
    int high = numsSize - 1;

    while (low <= high) {
        int mid = (low + high) / 2;
        int guess = nums[mid];

        if (guess == target)
            return mid;

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
}
