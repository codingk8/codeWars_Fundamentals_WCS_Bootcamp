/* CodeWars Kata: https://www.codewars.com/kata/mumbling
See link & ressources in the MD file */

/* 20181213 Complément avec un map complet en ES5 */
function f (s) {
    return s
        .toLowerCase()
        .split("")
        .map(function (item, index) {
            return item[0].toUpperCase() + item[0].repeat(index);
        })
        .join("-");
}
    
f("thfJnHkIlP");      

/* ES5 */
function accum(s) {
	let l = s.toLowerCase().split('')
  for(let i = 0; i < l.length; i++) {
    l[i] = l[i].toUpperCase() + l[i].repeat(i)
  }
  return l.join('-');
}

/* Other ES5 */
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
