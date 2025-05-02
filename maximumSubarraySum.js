// let arr=[2,3,-8,7,-1,2,3];

// let n = arr.length;
// let m=0;
// for(let i=0;i<n;i++)
// {
//     let sum = 0;
//     for(let j=i;j<n;j++)
//     {
//         sum += arr[j];
//     }
//     m = Math.max(sum,m);
// }
// console.log(m);

//Kadane's algo

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let n = arr.length;
 let m=0;
let sum = 0;
for(let i=0;i<n;i++)
{
     sum =Math.max(arr[i],sum+arr[i]);
     m= Math.max(m,sum);
}
console.log(m);