// Input: arr[] = {20, 10, 8, 6, 4, 2}
// Output: arr[] = {20, 8, 10, 4, 6, 2}

// Input:  arr[] = {10, 5, 6, 3, 2, 20, 100, 80}
// Output: arr[] = {10, 5, 6, 2, 20, 3, 100, 80} 

let arr = [20,10,8,6,4,2];
// let arr = [10,5,6,3,2,20,100,80];

function swapping(arr,x,y)
{
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function waveform(arr)
{
    let n = arr.length;
    for(let i=0;i<arr.length;i+=2)
    {
        if(i > 0 && arr[i-1] > arr[i])
        swapping(arr,i-1,i);
        
        if( i< n-1 && arr[i] < arr[i+1])
        swapping(arr,i,i+1);
    }
}

waveform(arr);
console.log(arr.join(' '));