let arr = [1,2,3,-4,-1,4];

let pos = [];
let neg = [];
for(let i=0;i<arr.length;i++)
{
  if(arr[i]>=0)
  {
    pos.push(arr[i]);
  }
  else{
    neg.push(arr[i]);
  }
}
let pi = 0,ni =0;
let i = 0;
while(pi < pos.length && ni < neg.length)
{
    if(i%2===0)
    {
        arr[i++] = pos[pi++];
    }
    else{
        arr[i++] = neg[ni++];
    }
}

while(pi < pos.length)
{
    arr[i++] = pos[pi++];
}
while( ni < neg.length)
{
    arr[i++] = neg[ni++];
}

console.log(arr);