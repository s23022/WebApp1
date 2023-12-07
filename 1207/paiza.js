const print = console.log
const stream = require('fs')
  .readFileSync('./data', 'utf8')
  .trim()
const lines = stream.splint('\n')
const [a, b] = lines

print(a, b)
