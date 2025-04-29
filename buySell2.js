let arr=[100,180,260,310,40,525,695];

// let arr = [4,2,2,2,4];

let profit=0;
for(let i = 1;i<arr.length;i++)
{
    if(arr[i]>arr[i-1])
    {
        profit += (arr[i]-arr[i-1]);
    }
}
console.log(profit);