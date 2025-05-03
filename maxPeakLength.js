// Input: arr = [2, 2, 2] 
// Output: 0 
// Explanation: No sub-array exists that shows the behavior of a mountain sub-array.


// Input: arr = [1, 3, 1, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5] 
// Output: 11 
// Explanation: Longest sub-array Mountain [1, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5] which have length 11

let arr =[2,2,2];

let c = 0;

for(let i=1;i<arr.length-1;i++)
{
    if(arr[i-1] < arr[i]  &&  arr[i] > arr[i+1])
    {
        let left =i;
        let right = i;
        while(left > 0 && arr[left-1]<arr[left])
        {
            left--;
        }
        while(right < arr.length-1 && arr[right+1] < arr[right])
        {
            right++;
        }
        let len = right - left +1;
        c = Math.max(c,len)
    }
    
}
console.log(c>=3? c : 0);


