// Input: arr[] = {1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1}
// Output: 4

let arr = [1,1,0,0,1,0,1,0,1,1,1,1];
let count = 1;
let maxCount = 0;
for(let i=1;i<arr.length;i++)
{
    if(arr[i] === arr[i-1])
    {
        count++;
    }
    else{
        maxCount = Math.max(maxCount,count);
        count = 1;
    }
}
let res = Math.max(maxCount,count);
console.log(res);