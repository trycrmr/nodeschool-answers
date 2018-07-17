const fs = require('fs')
const path = require('path')

const extensionFilter = '.' + process.argv[3]

fs.readdir(process.argv[2], (err, list) => {
    
    list.forEach((thisListItem) => {
        if(path.extname(thisListItem) == extensionFilter) {
            console.log(thisListItem)
        }
    })

})