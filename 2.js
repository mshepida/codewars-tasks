/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/

function findShort(s){
  var sArr =  s.split(" ").map(function(name) {
  return name.length;
});
return Math.min.apply(null, sArr);
} 

