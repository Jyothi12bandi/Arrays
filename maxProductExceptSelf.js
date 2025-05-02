// Input: arr[] = [10, 3, 5, 6, 2]
// Output: [180, 600, 360, 300, 900]

// it's time complexity becomes O(n^2) and space is O(n);
/*function exceptItself(arr,n,res,k)
{
    if(k===n) return res;

    let product = 1;
    for(let i=0;i<n;i++)
    {
        if(i===k) continue;
        else
        {
            product *= arr[i];
        }
    }
    res.push(product);
    k++;
    return exceptItself(arr,n,res,k);
}

let arr= [10,3,5,6,2];
let n = arr.length;
let k=0;
let res=[];
console.log(exceptItself(arr,n,res,k));

*/

//time complexity for O(n2) and space is O(n);

// let arr = [10,3,5,6,2];
// let res = [];
// for(let i=0;i<arr.length;i++)
// {
//     let product = 1;
//     for(let j=0;j<arr.length;j++)
//     {
//         if(i!==j) product *= arr[j];
//     }
//     res.push(product);
// }
// console.log(res);


//time is O(n) and Space is O(1);
let arr=[10,3,5,6,2];
let n = arr.length;
let res = new Array(n).fill(1);
let m= 1;
for(let i=0;i<n;i++)
{
    res[i] *= m;
    m *= arr[i];
}
let k = 1;
for(let i=n-1;i>=0;i--)
{
    res[i] *= k;
    k *= arr[i];
}
console.log(res);

