
// let arr= [1, 2, 3, 4] ;
// let K = 10;

// let count = 0;
// for(let size=1;size<=arr.length;size++)
// {
//     for(let i=0;i<=arr.length-size;i++)
//     {
//         let product = 1;
//         for(let j=i;j<i+size;j++)
//         {
//             product *=arr[j];
//         }
//         if(product < K) count++;
//     }
// }
// console.log(count);


// for(let i=0;i<arr.length;i++)
// {
//     let product = 1;
//     for(let j=i;j<arr.length;j++)
//     {
//         product *=arr[j];
//         if(product < K)
//         {
//             count++;
//         }
//         else{
//             break;
//         }

//     }
// }

// console.log(count);

let arr= [1, 2, 3, 4] ;
let K = 10;
let product = 1;
let j = 0;
let count = 0;

for(let i=0;i<arr.length;i++)
{
    product *=arr[i];

    while(product >= K && j<=i )
    {
        product /= arr[j];
        j++;
    }
    count += (i-j+1);
}
console.log(count);
