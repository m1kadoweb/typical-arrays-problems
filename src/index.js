
exports.min = function min (array) {
  let minNum = 0;
  if(array === undefined) {
    return 0;
  }
  
  for (let index = 0; index < array.length; index++) {
 
    if(array.length == 0) {
      return 0;
    }

    else if(minNum > array[index]) {
      minNum = array[index];
    }
    }
  return minNum;
}

exports.max = function max (array) {
  let maxNum = 0;
  if(array === undefined) {
    return 0;
  }
  for (let index = 0; index < array.length; index++) {
    
    if(array.length == 0) {
      return 0;
    }

    else if(maxNum < array[index]) {
      maxNum = array[index];
    }
  }
  return maxNum;
}

exports.avg = function avg (array) {
  let avgNum = 0;
  if(array === undefined) {
    return 0;
  }
  if(array.length == 0) {
    return 0;
  }

  for (let index = 0; index < array.length; index++) {
    avgNum = avgNum + array[index];   
  }
  return avgNum / array.length;
}
