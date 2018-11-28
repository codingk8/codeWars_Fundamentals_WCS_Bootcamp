/* CodeWars Kata: https://www.codewars.com/kata/vowel-count
See link & ressources in the MD file */

/* ES5 */
function getCount(s) {
  let vowelsCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "a" || s.charAt(i) == "e" || s.charAt(i) == "i" || s.charAt(i) == "o" || s.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}


/* ES5 */
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

/* ES5 */
function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

/* ES6 */
const getCount = str => str.replace(/[^aeiou]/g, '').length;

/* Also possible with a Switch :-) */
