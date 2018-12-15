/* CodeWars "Jaden casing strings"
See links & ressources in the MD file */


/* Complément d'utilisation du map, vois fichier "mémo" dédié */
/* 20181213 Avec un map en ES6 */
function c (s) {
    return s.toLowerCase().split(" ").map(function (item) {
        return item[0].toUpperCase() + item.slice(1);
    }).join(" ");
}
c("wHeRe YoU wAteR iT");

/* La même chose en ES6 */
const change = string => (string.toLowerCase().split(" ").map( item => item[0].toUpperCase() + item.slice(1))).join(" ");
change("wHeRe YoU wAteR iT");

/* Complément d'utilisation du forEach, tout est ici */
function c (s) { 
    s1 = s.toLowerCase().split(" ");
    let s2 = [];    
    s1.forEach(function (item) {
       s2.push(item[0].toUpperCase() + item.slice(1));
        });
    return s2.join(" ");
}
c("wHerE yOu wATer iT");


/* Solutions du kata */

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

/* That's all Folks! */
