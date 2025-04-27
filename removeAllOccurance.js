let arr = [3,2,3,2];
let ele = 3;

// let arr = [0,1,3,0,2,2,4,2];
// let ele = 2;

let index = 0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i] !== ele)
    {
        arr[index]=arr[i];
        index++;
    }
}
arr.length = index;
// console.log(arr);
console.log(arr.length);