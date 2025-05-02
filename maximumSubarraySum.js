let arr=[2,3,-8,7,-1,2,3];

let n = arr.length;
let m=0;
for(let i=0;i<n;i++)
{
    let sum = 0;
    for(let j=i;j<n;j++)
    {
        sum += arr[j];
    }
    m = Math.max(sum,m);
}
console.log(m);