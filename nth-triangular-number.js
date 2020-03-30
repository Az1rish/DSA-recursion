const nthTriangularNumber = function(number) {
    if (number === 1) {
      return number
    }
    return number + nthTriangularNumber(number - 1)
  }
  
  console.log(nthTriangularNumber(10));