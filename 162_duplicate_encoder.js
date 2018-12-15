/* CodeWars "Duplicate encoder"
See link & ressources in the MD file */


/* Ma solution */

function duplicateEncode(word){
 let newWord = "";
 let w = word.toLowerCase();
 for (let i = 0; i < w.length; i++) {
  if (w.indexOf(w[i]) === w.lastIndexOf(w[i])) {
   newWord+="(";
  } else {
   newWord+=")";
  }
  }
 return newWord;
}

/* Autres solutions */

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}

function duplicateEncode(word){
    return word.toLowerCase().replace(/./g, function(match) { return word.toLowerCase().split(match).length > 2 ? ')' : '(' ;});
}

/* That's all folks! */
