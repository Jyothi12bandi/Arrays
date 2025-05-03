// Input: n = 4, left[] = [2], right[] = [0, 1, 3]
// Output: 4
// Explanation: 

// last-moment-before-all-ants-fall-out-of-a-plank
 
// Input: n = 4, left[] = [] right[] = [0, 1, 2, 3, 4]
// Output: 4
// Explanation:

// last-moment-before-all-ants-fall-out-of-a-plank-2
 
// Input: n = 3, left[] = [0], right[] = [3]
// Output: 0
// Explanation: The ants will fall off the plank as they are already on the end of the plank.
let left = [];
let right=[0,1,2,3,4]
let n=4;

let res=0;
for(let i=0;i<left.length;i++)
{
    res=Math.max(res,left[i]);
}
for(let i=0;i<right.length;i++)
{
    res = Math.max(res, n-right[i]);
}
console.log(res);

