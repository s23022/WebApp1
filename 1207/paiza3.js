const print = console.log
const stream = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
const lines = stream.split(' ')
const [a, b, c] = lines

print(a)
print(b)
print(c)
