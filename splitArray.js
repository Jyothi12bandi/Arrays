/*
Input: arr[] = [1, 3, 4, 0, 4]
Output: [1, 2]
Explanation: 3 equal sum segments are: arr[0…1], arr[2…2] and arr[3…4] each having sum = 4.


Input: arr[] = [2, 3, 4]
Output: [-1, -1]
Explanation: No three segments exist which has equal sum.4
*/


// let arr=[1,3,4,0,4];
let arr = [1, -1, 1, -1, 1, -1, 1, -1]
function splitArray(arr,res=[])
{
    let sum = arr.reduce((sum,i)=>sum+i,0);
    if(sum %3 !==0)
    {
        return [-1,-1];
    }
    else{
    let targetSum = sum/3;
    
    let s= 0;
    let i=0;
    while( i<arr.length)
    {
        s += arr[i];
        if(targetSum ===s)
        {
            if(res.length<2)
            {
                res.push(i);
            }
            s = s-targetSum;
        } 
        i++;
    }
    return res;
    }
    
}
console.log(splitArray(arr));
