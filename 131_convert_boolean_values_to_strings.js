/* CodeWars "Convert boolean values to strings yes or no"
See links & ressources in the MD file */

/* ES 5 */
function boolToWord(bool){
  if (bool == true) {
  return 'Yes'; 
  }
  return 'No'; 
}

/* ES6 */
const boolToWord = bool => bool ? 'Yes' : 'No';
