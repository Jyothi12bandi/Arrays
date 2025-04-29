let arr = [2,4,1,7,5,0];

let index = -1;
let n = arr.length;

for(let i=n-2;i>=0;i--)
{
    if(arr[i]<arr[i+1])
    {
        index = i;
        break;
    }
}


if(index === -1)
{
    arr.reverse();
    console.log(arr);
}

for(let i=n-1;i>index;i--)
{
    if(arr[i]>arr[index])
    {
        [arr[i],arr[index]] = [arr[index],arr[i]]
        break;
    }
}

function reverseSubarray(arr, start) {
    let end = n - 1;
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

reverseSubarray(arr, index + 1);
console.log(arr);
