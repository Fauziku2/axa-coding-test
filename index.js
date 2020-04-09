let reverseNum = (num) => {
  if (typeof num !== 'number') {
    return 'please provide a integer'
  }
  let arrStr = num.toString().split('')
  if (arrStr[0] === '-') {
    arrStr.shift()
    arrStr.reverse()
    arrStr.unshift('-')
    return Number(arrStr.join(''))
  }
  return Number(arrStr.reverse().join(''));
}

