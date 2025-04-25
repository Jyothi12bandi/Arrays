// Input: arr= {1, 14, 2, 16, 10, 20}
// Output: 14


let arr = [1,14,2,16,10,20];
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
console.log(result[2]);