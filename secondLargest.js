
// input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34

let arr = [12,35,1,10,34,1];
let result = arr.reduce(([max,smax],i)=>{
    if(i > max)
    {
        smax = max;
        max = i;
    }
    else if( i > smax &&  i != max)
    {
        smax = i;
    }
    return [max,smax];
},[0,0]);
console.log(result[1]);