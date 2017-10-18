// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case //



function titleCase(str) {
  var array = str.split(" ");
  var mapped = array.map(function(word) {
    return word[0].toUpperCase() + word.slice[1].toLowerCase();
    
  });
  
  return mapped.join(" ");
}

titleCase("I'm a little tea pot");