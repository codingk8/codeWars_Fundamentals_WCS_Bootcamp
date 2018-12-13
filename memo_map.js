/* Tests sur la fonction map() en ES5 et ES6 */

/* MDN : La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction 
fournie sur chaque élément du tableau appelant. */

/* Map() simple en ES5 */

function map (array) {
    return array.map(function (item) {
        return item * 2;
    });
}
map([2, 4, 8, 12]);

/* La même en ES6 */
