
let n = 1234;
// let n = 5674;

function repetitiveSum(n)
{
    if(n===0) return 0;
    return (n%9===0) ? 9 : n%9;
}
console.log(repetitiveSum(n));