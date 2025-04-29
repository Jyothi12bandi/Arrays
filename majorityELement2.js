let arr = [1,2,1,2,1,1,2,3];

let c1=0,c2=0,e1=-Infinity,e2=-Infinity;

for(let i=0;i<arr.length;i++)
{
    if(c1===0 && arr[i]!==e2)
    {
        c1=1;
        e1=arr[i];
    }
    else if(c2===0 && arr[i]!==e1)
    {
        c2=1;
        e2=arr[i];
    }
    else if(e1===arr[i])c1++;
    else if(e2===arr[i])c2++;
    else{
        c1--;
        c2--;
    }
}
let res=[];
c1=0,c2=0;
for(let n of arr)
{
    if(n===e1)c1++;
    if(n===e2)c2++;
}
let min = Math.floor(arr.length/3);
if(c1>=min) res.push(e1);
if(c2>=min) res.push(e2);

res.sort();
console.log(res);