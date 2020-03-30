const countingSheep = function(number) {
    if (number === 0) {
      return "All sheep jumped over the fence"
    }
    return `${number}: Another sheep jumps over the fence \n` + countingSheep(number - 1)
  }
  
  console.log(countingSheep(3));