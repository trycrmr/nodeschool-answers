const fs = require('fs')

fs.readFile(process.argv[2], (err, data) => {
    if(err)
        return console.log(err)

    let result = data.toString().split('\n').length - 1
    console.log(result)
})