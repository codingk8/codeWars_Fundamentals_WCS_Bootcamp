/* CodeWars Kata: https://www.codewars.com/kata/jaden-casing-strings
See link & ressources in the MD file */

/* ES5 - Did not add .toLowerCase() since not required */
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

/* ES5 - With .toLowerCase() */
String.prototype.toJadenCase = function () { 
  return this.toLowerCase().split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

/* Other ES5 */
String.prototype.toJadenCase = function() {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};

String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};
