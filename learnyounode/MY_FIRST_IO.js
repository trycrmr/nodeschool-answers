const fs = require('fs')

let result = fs.readFileSync(process.argv[2])

result = result.toString().split('\n').length - 1
console.log(result)