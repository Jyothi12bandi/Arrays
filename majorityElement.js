let arr = [1,1,2,1,3,5,1];


//the time complexity is o(n2)
// let maxcount = 0;
// let count = 1;
// let n = arr.length;
// let ele=0;
// arr.sort();
// for(let i=0;i<n;i++)
// {
//    for(let j = i+1;j<n;j++)
//    {
//         if(arr[i]===arr[j])
//         {
//             count++;
//             ele = arr[i];
//         }
//         maxcount = Math.max(maxcount,count);
//    }
//    count = 1;
// }
// // console.log(maxcount);
// let res = Math.max(maxcount,count);
// if(res > Math.floor(n/2)) 
// console.log(ele);

let ele = null;
let count = 0;
for(let num of arr)
{
    if(count ===0)
    {
        ele = num;
    }
    count += (ele === num)?1:-1;
}

count = 0;
for(let num of arr)
{
    if(ele === num)count++;
}

console.log((count > Math.floor(arr.length/2))? ele:"No Majority Element Found");
//Here is i follow moore's voting algorithm to find majority element
//time complexity is O(N) and space is O(1);