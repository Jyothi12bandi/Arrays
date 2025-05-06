// Input: arr[] = {2, -3, 4, 1, 1, 7}
// Output: 3
// Explanation: 3 is the smallest positive number missing from the array.


// Input: arr[] = {5, 3, 2, 5, 1}
// Output: 4
// Explanation: 4 is the smallest positive number missing from the array.


// Input: arr[] = {-8, 0, -1, -4, -3}
// Output: 1 
// Explanation: 1 is the smallest positive number missing from the array.

let arr=[5,3,2,5,1];

let pos=[];
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>=0)
    {
        pos.push(arr[i]);
    }
}
// console.log(pos);
let j=0;
for(let i=0;i<pos.length-1;i++)
{
    if(pos[i] !== pos[i+1])
    {
        pos[j] = pos[i];
        j++;
    }
}
pos[j] = pos[pos.length-1];
j++;
pos.length=j;
pos.sort((a,b)=>a-b);
// console.log(pos);
let n = pos.length;
let sum = 0;
let number = 0;
for(let i=0;i<n;i++)
{
    if(pos[i] + 1 !== pos[i+1])
    {
        number = pos[i]+1;
        break;
    } 

}
console.log(pos.length===1 ? 1 : number);

