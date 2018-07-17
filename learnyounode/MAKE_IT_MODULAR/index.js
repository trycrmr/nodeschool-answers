const dirFilter = require('./my_module')

dirFilter(process.argv[2], process.argv[3], (err, data) => {
    if(err)
        console.log(err)

    data.forEach((thisFile) => {console.log(thisFile)})
})
