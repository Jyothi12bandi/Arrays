let arr=[-2, 1, -3, 4, -1, 2, 1, -5, 4];

let n = arr.length;
let maxProduct = Number.MIN_SAFE_INTEGER;
let right = 1;
let left = 1;
for(let i=0;i<n;i++)
{
    if(left ===0)
    {
        left = 1;
    }
    if(right === 0)
    {
        right = 1;
    }

    left *= arr[i];
    let j = n-i-1;
    right *= arr[j];
    maxProduct = Math.max(left,right,maxProduct);
}
console.log(maxProduct);