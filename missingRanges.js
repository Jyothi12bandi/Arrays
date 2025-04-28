// Input: arr[] = [14, 15, 20, 30, 31, 45], lower = 10, upper = 50
// Output: [[10, 13], [16, 19], [21, 29], [32, 44], [46, 50]]

// let arr = [14,15,20,30,31,45];
// let l = 10;
// let u = 50;


// Input: arr[] = [-48, -10, -6, -4, 0, 4, 17], lower = -54, upper = 17
// Output: [[-54, -49], [-47, -11], [-9, -7], [-5, -5], [-3, -1], [1, 3], [5,16]]
let arr = [-48,-10,-6,-4,0,4,17];
let l = -54;
let u = 17;
let r= [];
if(arr[0]>l)
{
    r .push([l,arr[0]-1]);
}
for(let i=0;i<arr.length-1;i++)
{
    if(arr[i]+1< arr[i+1])
    {
        r.push([arr[i]+1,arr[i+1]-1]);
    }
}
if(arr[arr.length-1]<u)
{
    r.push([arr[arr.length-1]+1,u]);
}
console.log(r);