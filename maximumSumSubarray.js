let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let n = arr.length;
 let m=0;
let sum = 0;
let start=0,end=0,temp=0;
for(let i=0;i<n;i++)
{
    if(arr[i]>sum)
    {
        sum = arr[i];
        temp=i;
    }
    else{
        sum += arr[i];
    }

    if(sum > m)
    {
        m = sum;
        start = temp;
        end=i;
    }  
}
console.log(arr.slice(start,end+1));