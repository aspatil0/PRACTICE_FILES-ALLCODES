def second_largest(arr):
    if len(arr) < 2:
        return "Array must have at least two elements"

    largest = second_largest = float('-inf')

    for num in arr:
        if num > largest:
            second_largest = largest
            largest = num
        elif num > second_largest and num != largest:
            second_largest = num

    if second_largest == float('-inf'):
        return "No second largest element"

    return second_largest


arr = [10, 5, 20, 8, 20]
print(second_largest(arr))  # Output: 10
