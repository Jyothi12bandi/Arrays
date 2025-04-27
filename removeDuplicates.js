
let arr = [2,2,2,2];
// let arr = [1,2,2,3,4,4,4,5,5];


let k = 0;
for(let i=0;i<arr.length-1;i++)
{
    if(arr[i]!==arr[i+1])
    {
        arr[k]=arr[i];
        k++;
    }
}
arr[k]=arr[arr.length-1];
k++;
arr.length = k;
console.log(arr);

// let res = new Set(arr);
// console.log([...res]);