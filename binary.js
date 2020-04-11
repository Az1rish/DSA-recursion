function binary(number, binNum) {
  
    if (number === 1) {
      return "1" + binNum
    } else {
      if (number % 2 === 0) {
        binNum = "0" + binNum
      } else {
        binNum = "1" + binNum
      }
      return binary(Math.floor(number/2), binNum)
    }
  }
  
  console.log(binary(16, ""))