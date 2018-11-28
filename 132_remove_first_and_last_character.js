/* CodeWars Kata: https://www.codewars.com/kata/remove-first-and-last-character
See link & ressources in the MD file */

/* ES5 */
function removeChar(str){
 return str.slice(1, -1);
}

function removeChar(str){
 return str.substring(1, str.length-1);
}

function removeChar(str){
  str1 = str.split('');
  str1.shift();
  str1.pop();
  return str1.join(''); 
}

/* ES6 */
const removeChar = str => str.slice(1,-1)
