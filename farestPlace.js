// Input: Seats = "1000101"
// Output: 2
// Explanation: Geek can take 3rd place and have a distance of 2 in left and 2 in right.

// Input: Seats = "1000"
// Output: 3
// Explanation: Geek can take the rightmost seat to have a distance of 3.

let seats = "1000";
let n = seats.length;

let result = 0;
let left = new Array(n);
let dist= Infinity;

for(let i=0; i< n;i++)
{
    if(seats[i]==='1') dist = 0;
    else dist++;

    left[i]=dist;
}
dist = Infinity;
for(let i=n-1;i>=0;i--)
{
    if(seats[i]==='1') dist = 0;
    else dist++;

    let minD = Math.min(dist,left[i]);
    result = Math.max(result,minD);
}
console.log(result);
