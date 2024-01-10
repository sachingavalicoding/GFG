const arr = [1, 2, -4, 7, -6, 5, 1, -2];
const subArraySum = (arr) => {
    let currSum = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];

        if (currSum < 0) {
            currSum = 0;
        }
        if (currSum > sum) {
            sum = currSum;
        }

    }
    return sum;
}

const ans = subArraySum(arr);
console.log(ans);