/* CodeWars Kata: https://www.codewars.com/kata/get-the-middle-character
See link & ressources in the MD file */

/* ES5 */
 function getMiddle(s) {
  return s.length % 2 ? s.substr(s.length / 2 , 1) : s.substr(s.length / 2 - 1, 2);
}

/* ES5 */
function getMiddle(string) {
  let middleIndex = string.length / 2;
  if (string.length % 2 == 0) {
    return string.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return string.charAt(middleIndex);
  }
}

/* ES6 */
const getMiddle = s => (s.length % 2 ? s.substr(s.length / 2 , 1) : s.substr(s.length / 2 - 1, 2));


// 20181213
function a (s) {
 if (s.length % 2 === 0) {
  return s[(s.length / 2 ) - 1] + s[(s.length / 2 )];
 } return s[((s.length -1) / 2)];
}
a("terminator");
