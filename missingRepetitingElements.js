// Input: arr[] = {3, 1, 3}
// Output: 3, 2

// Input: arr[] = {4, 3, 6, 2, 1, 1}
// Output: 1, 5

// let arr = [3,1,3];
// let arr = [4,3,6,2,1,1]

// arr.sort();
// let res = [];
// let sum = 0;
// for(let i=1;i<arr.length;i++)
// {
//     if(arr[i]===arr[i-1])
//     {
//         res.push(arr[i]);
//     }
//     else{
//         sum += arr[i-1];
//     }
// }
// sum += arr[arr.length-1];
// let n = arr.length;
// let e = ((n*(n+1))/2) - sum;
// res.push(e);
// console.log(res);

let arr=[3,1,3];
let xorV = 0;
for(let i=0;i<arr.length;i++)
{
    xorV ^= arr[i];
}
for(let i=1;i<=arr.length;i++)
{
    xorV ^= i;
}

let x = 0,y=0;
let rightBit = xorV &  ~(xorV-1);

for(let i = 0;i<arr.length;i++)
{
    if((rightBit & arr[i])!==0)
    {
        x ^= arr[i];
    }
    else{
        y ^=arr[i];
    }
}
for(let i = 1;i<=arr.length;i++)
{
    if((rightBit & arr[i])!==0)
    {
        x ^= i;
    }
    else {
        y ^= i;
    }
}

let repeating = arr.includes(x)? x:y;
let missing = arr.includes(x) ? y : x;

console.log(repeating,missing);