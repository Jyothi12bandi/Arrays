// Input: arr[] = [16, 17, 4, 3, 5, 2]
// Output: [17 5 2]

let arr = [16,17,4,3,5,2];

// let k = 0;
// for(let i=0;i<arr.length;i++)
// {
//    let leader = true;
//    for(let j = i+1;j<arr.length;j++)
//    {
//         if(arr[i]<=arr[j])
//         {
//             leader = false;
//             break;
//         }
//    }
//    if(leader)
//    {
//     arr[k]=arr[i];
//     k++;
//    }
  
// }
// arr.length = k;

// console.log(arr);


// let result = arr.reduceRight((acc,i)=>{
//     if(acc.length === 0 || i >= acc[acc.length-1]) acc.push(i);
//     return acc;
// },[]).reverse();
// console.log(result);

let res = [];
let n = arr.length;
let max = arr[n-1];
res.push(max);
for(let i=n-2;i>=0;i--)
{
    if(arr[i]>=max)
    {
        max = arr[i];
        res.push(max);
    }
}
res.reverse();
console.log(res);