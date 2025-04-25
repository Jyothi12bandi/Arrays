// Input : [1, 2, 4]
// Output : 125
// Explanation: 124 + 1 = 125 

let arr = [1,2,4];

// Input : [9, 9, 9]
// Output: 1000
// Explanation: 999 + 1 = 1000 

// let arr = [9,9,9]

let c = 1;
for(let i=arr.length-1;i>=0;i--)
{
    let sum = arr[i]+c;
    arr[i] = sum %10;
    c = Math.floor(sum/10);
}
if(c > 0)
{
    arr.unshift(c);
}
console.log(arr.join(''));