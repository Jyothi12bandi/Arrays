// Input: slt1[][] = [[10,50], [60,120], [140,210]], slt2[][] = [[0,15], [60,70]], d = 8
// Output: [60,68]
// Explanation: The only overlap is [60,70] (10 minutes), which is enough for an 8-minute meeting, so answer is [60,68]

// Input: slt1[][] = [[10,50], [60,120], [140,210]], slt2[][] = [[0,15], [60,70]], d = 12
// Output: []
// Explanation: The only overlap is [60, 70] (10 minutes), but 12 minutes are needed, so no valid slot exists.

let arr = [[10,50],[60,120],[140,210]];
let arr2 = [[0,15],[60,70]];
let d=8;
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
        if(oe-os >=d)
        {
            result.push(os,os+d);
            break;
        }
    }

    if(e1<e2)
    {
        i++;
    }
    else{
        j++;
    }

}

console.log(result.length ? result : [])




