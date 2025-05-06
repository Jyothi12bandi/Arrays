// Input: arr[] = [3, 0, 1, 0, 4, 0, 2]
// Output: 10
// Explanation: The expected rainwater to be trapped is shown in the above image.


// Input: arr[] = [3, 0, 2, 0, 4]
// Output: 7
// Explanation: We trap 0 + 3 + 1 + 3 + 0 = 7 units.


// Input: arr[] = [1, 2, 3, 4]
// Output: 0
// Explanation: We cannot trap water as there is no height bound on both sides
let heights=[1,2,3,4];

let left = 0, right = heights.length - 1;
let leftMax = 0, rightMax = 0, water = 0;
while (left < right) {
    if (heights[left] < heights[right]) {
        heights[left] >= leftMax ? leftMax = heights[left] : water += leftMax - heights[left];
        left++;
    } else {
        heights[right] >= rightMax ? rightMax = heights[right] : water += rightMax - heights[right];
        right--;
    }
}
console.log(water);
