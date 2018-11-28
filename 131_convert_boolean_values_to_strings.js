/* Kata: https://www.codewars.com/kata/convert-boolean-values-to-strings-yes-or-no
See link & ressources in the MD file */

/* ES 5 */
function boolToWord(bool){
  if (bool == true) {
  return 'Yes'; 
  }
  return 'No'; 
}

/* ES6 */
const boolToWord = bool => bool ? 'Yes' : 'No';
