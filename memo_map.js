/* Tests sur la fonction map() en ES5 et ES6 */

/* MDN : La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction 
fournie sur chaque élément du tableau appelant. 
Syntaxe : const nouveauTableau = arr.map(callback [, thisArg])

Rq : map() construit un nouveau tableau. Si on utilise cette méthode sans utiliser le résultat, 
mieux vaudra utiliser forEach ou for...of.  Pour mieux décider si map()est adéquat, regardez si vous 
utilisez la valeur de retour et/ou si vous renvoyez une valeur avec la fonction callback : si ce n'est 
pas le cas, il ne faut pas utiliser map().*/

/* Map() simple en ES5 */

function map (array) {
    return array.map(function (item) {
        return item * 2;
    });
}
map([2, 4, 8, 12]);


/* La même en ES6 */

const array = [2, 4, 8, 12];
const map2 = array.map ( item => item * 2);


/* Map compliqué en ES5, Cf. 151 Jaden Casing Strings, mettre la première lettre de chaque mot en majuscule */

function c (s) {
    return s.toLowerCase().split(" ").map(function (item) {
        return item[0].toUpperCase() + item.slice(1);
    }).join(" ");
}

c("wHeRe YoU wAteR iT");

/* La même en ES6 */

const change = string => (string.toLowerCase().split(" ").map( item => item[0].toUpperCase() + item.slice(1))).join(" ");
change("wHeRe YoU wAteR iT");


/* Thats' all folks! */
