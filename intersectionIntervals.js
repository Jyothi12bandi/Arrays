// Input   arr1[][] = {{0, 4}, {5, 10}, {13, 20}, {24, 25}}   arr2[][] = {{1, 5}, {8, 12}, {15, 24}, {25, 26}} 
// Output  {{1, 4}, {5, 5}, {8, 10}, {15, 20}, {24, 24}, {25, 25}}
// Explanation  {1, 4} is the overlap of {0, 4} and {1, 5}. Similarly, {24, 24} is the overlap of {24, 25} and {15, 24}.

// Input  arr1[][] = {{0, 2}, {5, 10}, {12, 22}, {24, 25}}  arr2[][] = {{1, 4}, {9, 12}, {15, 24}, {25, 26}} 
// Output  {{1, 2}, {9, 10}, {12, 12}, {15, 22}, {24, 24}, {25, 25}} 
// Explanation  {1, 2} is the overlap of {0, 2} and {1, 4}. Similarly, {12, 12} is the overlap of {12, 22} and {9, 12}. 

let arr = [[0,4],[5,10],[13,20],[24,25]];
let arr2 = [[1,5],[8,12],[15,24],[25,26]];

let result=[];
let i=0,j=0;
while(i<arr.length && j<arr2.length)
{
    let s1 = arr[i][0],e1=arr[i][1];
    let s2 = arr2[j][0],e2=arr2[j][1];

    if(s1 <= e2 && s2 <= e1)
    {
        let os = Math.max(s1,s2);
        let oe = Math.min(e1,e2);
        result.push([os,oe]);
    }

    if(e1<e2)
    {
        i++;
    }
    else{
        j++;
    }

}

console.log(result);




