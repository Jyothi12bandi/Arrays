import{createInterface} from 'readline';
const rl = createInterface({
    input : process.stdin,
    output: process.stdout,
});

function ask(question) {
    return new Promise((resolve) => rl.question(question, resolve));
}

async function main() {
    const line = await ask('Enter array elements (space separated): ');
    let arr = line.trim().split(/\s+/).map(Number);
    
    const x = await ask('Enter the number to duplicate: ');
    let k = Number(x);

    console.log('Original array:', arr);
    console.log('Number to duplicate:', k);

    console.log('Modified array:', duplicates(arr, k));
    
    rl.close();
}


function duplicates(arr,k)
{
    let n = arr.length;
    for(let i=0;i<n;i++)
    {
        if(arr[i]===k)
        {
            arr.splice(i+1,0,k);
            i++;
            arr.pop();
        }
    }
    return arr;
}
main();
