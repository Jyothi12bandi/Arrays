// Input: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], 
// k = 3 
// Output: 3, 2, 1, 6, 5, 4, 9, 8, 7

// let arr = [1,2,3,4,5,6,7,8,9];
// let k = 3;
// let arr= [1, 2, 3, 4, 5, 6, 7, 8];
// let k = 5 
// Input: arr[] = [1, 2, 3, 4, 5, 6], k = 1 
// Output: 1, 2, 3, 4, 5, 6
// Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], k = 10 
// Output: 8, 7, 6, 5, 4, 3, 2, 1

let arr = [1, 2, 3, 4, 5, 6,7,8];
let k = 10; 

let a=[];
for(let i=0;i<arr.length;i+=k)
{
    for(let j=Math.min(i+k-1,arr.length-1);j>=i;j--)
    {
        a.push(arr[j]);    
    }
    
}
console.log(a);


