// Input: arr[] = {1, 2, 3, 4, 5, 6}, d = 2
// Output: {3, 4, 5, 6, 1, 2}
// Explanation: After first left rotation, 
// arr[] becomes {2, 3, 4, 5, 6, 1} 
// and after the second rotation, 
// arr[] becomes {3, 4, 5, 6, 1, 2}

let arr = [1,2,3,4,5,6];
let d = 2;
// Input: arr[] = {1, 2, 3}, d = 4
// Output: {2, 3, 1}

// let arr = [1,2,3];
// let d = 4;

// let a=[];
// let size = d%arr.length;
// for(let i=size;i<arr.length;i++)
// {
//     a.push(arr[i]);
// }
// for(let i=0;i<size;i++)
// {
//     a.push(arr[i]);
// }
// console.log(a); // Space Complexity is O(n);

let n = arr.length;
 d = d%n;
 function rotate(arr,s,e)
 {
    while(s<e)
    {
        [arr[s],arr[e]] = [arr[e],arr[s]];
        s++;
        e--;
    }
 }

 rotate(arr,0,d-1);
 rotate(arr,d,n-1);
 rotate(arr,0,n-1);
 console.log(arr);
