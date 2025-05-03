// Input: arr[] = {1, 0, 1}, k = 1
// Output: 3
// Explanation: By flipping the zero at index 1, all the array elements become one.


// Input: arr[] = {1, 0, 0, 1, 0, 1, 0, 1}, k = 2
// Output: 5 
// Explanation: By flipping the zeroes at indices 4 and 6, we get the longest subarray from index 3 to 7 containing all 1’s.

let arr = [1,0,1];
let k = 2;

let j = 0;
let len = 0;
let zeroes = 0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]===0)
    {
        zeroes++;
    }
    while(zeroes > k)
    {
       if(arr[j]===0) zeroes--;
       j++;
    }
    len = Math.max(len,i-j+1);
}
console.log(len);



