const fs = require('fs')
const path = require('path')

let dirFilter = (dirName, fileExt, cb) => {
    fileExt = fileExt.startsWith('.') ? fileExt : '.' + fileExt

    fs.readdir(dirName, (err, list) => {
        if(err)
            return cb(err, null)

        let result = Array()
        let filesAssessed = 0
        do {
            if(path.extname(list[filesAssessed]) == fileExt) {
                result.push(list[filesAssessed])
                filesAssessed++
            } else {
                filesAssessed++
            }
        } while(filesAssessed !== list.length)

        return cb(null, result)
    })
}

module.exports = dirFilter