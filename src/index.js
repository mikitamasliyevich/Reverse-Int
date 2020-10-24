module.exports = function reverse (n) {
    let num = Math.abs(n)
    let split = num.toString().split('').reverse().join('')
  return +split
}
