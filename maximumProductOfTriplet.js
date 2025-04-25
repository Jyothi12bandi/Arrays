// Input:  arr= [10, 3, 5, 6, 20]
// Output: 1200
// Explanation: Multiplication of 10, 6 and 20

let arr = [10,,3,5,6,20];
let result = arr.reduce(([max,smax,tmax],i)=>{
    if(i > max)
    {
        tmax = smax;
        smax = max;
        max = i;
    }
    else if(i>smax && i!=max)
    {
        smax=i;
    }
    else if( i > tmax &&  i != max && i!=smax) 
    {
        tmax = i;
    }
    return [max,smax,tmax];
},[0,0]);
console.log(result[0]*result[1]*result[2]);

//when negative numbers are present at that time
let a = [-10, -3, 5, 6, -20]; 
let n = a.length;

a.sort((a,b)=>a-b);
console.log(Math.max(a[0]*a[1]*a[2],a[n-1]*a[n-2]*a[n-3]));