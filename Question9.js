function reverseNChars(s, n) {
  if (n > s.length) {
    throw new Error('N must be less than or equal to string length')
  }
  const pre = s.substring(0, n)
  const reversedPre = prefix.split('').reverse().join('')
  return reversedPre + s.substring(n)
}
