let args = process.argv

let numbersToSum = args.slice(2)

let sum = numbersToSum.reduce((acc, currVal) => {
    currVal = parseInt(currVal)
    return acc + currVal
}, 0)

console.log(sum)