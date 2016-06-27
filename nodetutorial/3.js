var fs = require('fs')

var fn = process.argv[2] //returns a buffer project

var buf = fs.readFileSync(fn) 

var lines = buf.toString().split('\n').length - 1
console.log(lines)
 //convert buffer to string, split every line into an array and get length.