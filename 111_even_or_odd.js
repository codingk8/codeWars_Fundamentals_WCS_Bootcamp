/* Kata: https://www.codewars.com/kata/even-or-odd
See link & ressources in the MD file */

/* ES5 */
function even_or_odd(number) {
  if (number %2 === 0){
    return 'Even';
  }
  return 'Odd';
}

/* ES6 */
const even_or_odd = n => n%2 === 0 ? 'Even' : 'Odd';


