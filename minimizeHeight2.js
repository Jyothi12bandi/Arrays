let arr=[1,5,8,10];
let k = 2;


arr.sort((a,b)=>a-b);
let n = arr.length;
let diff = arr[n-1] - arr[0];
for(let i=0;i<n-1;i++)
{
   let min = Math.min(arr[0]+k,arr[i+1]-k);
   let  max = Math.max(arr[n-1]-k,arr[i]+k);
    if(min < 0) continue;
    diff = Math.min(diff,max-min);
}

console.log(diff);