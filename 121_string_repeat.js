/* CodeWars Kata: https://www.codewars.com/kata/string-repeat
See link & ressources in the MD file */

/* ES5 */
function repeatStr (n, s) {
  return s.repeat(n);
}

/* ES5 with a loop */
function repeatStr (n, s) {
var str="";
for(var i=0; i < n; i++)
  str+=s;
  return str;
}
repeatStr(7, "g");

/* ES6 */
const repeatStr = (n, s) => s.repeat(n)
