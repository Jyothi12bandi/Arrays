// Input: arr[] = [-4, -2, 0, 2, 4], A = 1, B = 3, C = 5
// Output: [3, 5, 9, 15, 33]
// Explanation: After applying f(x) = 1*(x^2)+ 3*x + 5 to each x, we get [3, 5, 9, 15, 33]. After sorting this array, the array becomes [3, 5, 9, 15, 33].


// Input: arr[] = [-3, -1, 2, 4], A = -1, B = 0, C = 0
// Output: [-16, -9, -4, -1]
// Explanation: After applying f(x) = -1*(x^2) to each x, we get [ -9, -1, -4, -16 ]. After sorting this array, the array becomes  [-16, -9, -4, -1].


// Input: arr[] = [-1, 0, 1, 2, 3, 4], A = -1, B = 2, C = -1
// Output: [-9, -4, -4, -1, -1, 0]  

let arr = [-1,0,1,2,3,4];
let a=-1,b=2,c=-1;

let res=[];
let sum = 0;
for(let i=0;i<arr.length;i++)
{
    sum = a*(Math.pow(arr[i],2)) + b*arr[i] + c;
    res.push(sum);
    sum = 0;
}
console.log(res.sort((a,b)=>a-b));