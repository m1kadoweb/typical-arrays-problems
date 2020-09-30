
exports.min = function min (array) {
  let minNum = 0
  if(array === undefined || array.length === 0) {
    return 0
  } else {
    array.forEach(num => {
      minNum > num ? minNum = num : ''
    });
  }
  return minNum
}

exports.max = function max (array) {
  let maxNum = 0
  if(array === undefined || array.length === 0) {
    return 0
  } else {
    array.forEach(num => {
      maxNum < num ? maxNum = num : ''
    });
  }
  return maxNum
}


exports.avg = function avg (array) {
  let avgNums = 0
  if(array === undefined || array.length === 0) {
    return 0
  } 

  array.forEach(num => {
    avgNums += num
  })
  return avgNums / array.length
}
