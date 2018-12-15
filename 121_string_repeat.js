/* CodeWars "String repeat"
See links & ressources in the MD file */

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


// 20191213 avec une boucle et un tableau

function sr(n, s) {
    console.log(n);
    console.log(s);
    let arr = [];
    console.log(arr);
    for (let i = 0; i < n-1; i++) {
        arr.push(s);
        console.log(arr);
        }
    let str = s.concat(...arr);
    console.log(str);
    return str;
    }
sr(6, "ba");
