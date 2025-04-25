// Input: arr = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: arr = [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.

let arr = [1,2,0,4,3,0,5,0];

let index = 0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]===0)
    {
        [arr[index],arr[i]] = [arr[i],arr[index]];
        index++;
    }
}
console.log(arr);
