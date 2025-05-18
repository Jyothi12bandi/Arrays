function countIndices(arr) {
    let n = arr.length;
    let count = 0;

    // Traverse the array and check if removing each element makes the sum of even and odd indexed elements equal
    for (let i = 0; i < n; i++) {
        let evenSum = 0, oddSum = 0;

        // Calculate the sum of even and odd
        // indexed elements excluding arr[i]
        let k = 0;
        for (let j = 0; j < n; j++) {
            
            // Skip the current element
            if (j === i) continue;  

            if (k % 2 === 0) {
                evenSum += arr[j];
            } else {
                oddSum += arr[j];
            }
            k++;
        }

        // If the sums of even and odd indexed 
        // elements are equal, increment the count
        if (evenSum === oddSum) {
            count++;
        }
    }

    return count;
}

// Driver code
const arr = [1,1,1];
console.log(countIndices(arr));