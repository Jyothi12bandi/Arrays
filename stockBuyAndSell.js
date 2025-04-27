// Input: prices[] = {7, 10, 1, 3, 6, 9, 2}
// Output: 8
// Explanation: Buy for price 1 and sell for price 9. 

let arr = [7,10,1,3,6,9,2];
// let arr = [7,6,4,3,1];
// let arr = [1,3,6,9,11];


let maxProfit = 0;
let profit = Infinity;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]<profit) profit = arr[i];
    maxProfit = Math.max(maxProfit,arr[i]-profit);
}
console.log(maxProfit);