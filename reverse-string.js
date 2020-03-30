const reverseString = function(string) {
    if (string.length === 1) {
      return string.charAt(0);
    }
    return string.charAt(string.length - 1) + reverseString(string.substring(0, string.length - 1))
  }
  
  console.log(reverseString("string"));