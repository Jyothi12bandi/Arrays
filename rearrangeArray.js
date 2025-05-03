// Input:  arr[] = [1, 2, 3, -4, -1, 4]
// Output: arr[] = [1, -4, 2, -1, 3, 4]


// Input:  arr[] = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]
// Output: arr[] = [5, -5, 2, -2, 4, -8, 7, 1, 8, 0]

let arr=[1,2,3,-4,-1,4];
let pos=[],neg=[];
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>=0) pos.push(arr[i]);
    if(arr[i]<0) neg.push(arr[i]);
}
let k=0,p=0,n=0;
while(p<pos.length && n < neg.length)
{
    if(k%2===0)
    {
        arr[k++] = pos[p++];
    }
    else{
        arr[k++] = neg[n++];
    }
}
while(p<pos.length)
{
    arr[k++] = pos[p++];
}
while(n<neg.length)
{
    arr[k++] = neg[n++];
}

console.log(arr);