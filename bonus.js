
function findKthPositive(arr, k) {
  let missing = 0;
  let current = 1;
  let i = 0;

  while (true) {
    if (i < arr.length && arr[i] === current) {
      i++;
    } else {
      missing++;
      if (missing === k) return current;
    }
    current++;
  }
}

// Example usage:
console.log(findKthPositive([2, 3, 4, 7, 11], 5)); // Output: 9