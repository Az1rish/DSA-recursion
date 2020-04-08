function anagram(string) {
    // make results and object so keys remain unique
    var results = {};
    
    function combos(buildCombo, feed) {
      // base case, when all characters in string have been used, that permutation becomes a new key of the object
      if (!feed.length) {
        results[buildCombo] = '';
        return;
      }
      // for loop iterates through each character in the string as a starting point and recursively calls combos function with that character removed from string
      for (let i = 0; i < feed.length; i++) {
        combos(buildCombo + feed.charAt(i), feed.slice(0, i) + feed.slice(i + 1));
      }
    };
    // start the recursive function 
    combos('', string);
    // return all keys of the object as an array of the different anangrams of string
    return Object.keys(results);
  }
  
  console.log(anagram('east'));