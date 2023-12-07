const print = console.log
const stream = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
const lines = stream.split('\n')
const [N, ...rest] = lines

print(rest.join('\n'))
