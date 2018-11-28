# codeWars_Fundamentals_WCS_Bootcamp
First level of Wild Code School CodeWars package 💣

# Item 111 Even or Odd :balloon:

[Play](https://www.codewars.com/kata/even-or-odd)

[Check](https://github.com/codingk8/codeWars_Fundamentals_WCS_Bootcamp/edit/master/111_even_or_odd.js)


# Item 112 Opposite number :sparkles:

[Play](https://www.codewars.com/kata/opposite-number)

[Check](https://github.com/codingk8/codeWars_Fundamentals_WCS_Bootcamp/blob/master/112_opposite_number.js)


# Item 121 String repeat :rocket:

[Play](#)

### La fonction js .repeat()
[js repeat function on MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/repeat) :fr:
> La méthode repeat() construit et renvoie une nouvelle chaine de caractères qui contient le nombre de copie demandée de la   > chaine de caractères sur laquelle la méthode a été appelée, concaténées les unes aux autres.
> *str.repeat(compte);*

## Ma solution
```javascript
function repeatStr (n, s) {
  return s.repeat(n);
}
```

## ES5 with a loop :tada:
```javascript
function repeatStr (n, s) {
var str="";
for(var i=0; i < n; i++)
  str+=s;
  return str;
}
repeatStr(7, "g");
```

## ES6
```javascript
const repeatStr = (n, s) => s.repeat(n)
````

# Item 122 Jenny's secret message :heart:

## Ma solution
```javascript
function greet(name){  
  if(name === "Johnny")
    return "Hello, my love!";
  return "Hello, " + name + "!";
}
```

## ES6
```javascript
const greet = n => "Hello, " + (n === "Johnny" ? "my love" : n ) + "!";
```

## ES6 upgrade :rainbow:
```javascript
const h = n => 'Hello, ' + (n == 'Johnny' ? 'my love' : 'dear ' + n) + '!';
```

# Item 131 Convert boolean values to strings 'Yes' or ‘No' :dancer:

## Ma solution
```javascript
function boolToWord(bool){
  if (bool == true) {
  return 'Yes'; 
  }
  return 'No'; 
}
```

## ES6
```javascript
const boolToWord = bool => bool ? 'Yes' : 'No';
```

# Item 132 Remove First and Last Character :jack_o_lantern:

## Ma solution

[js slice function on MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/slice) :fr:
> La méthode slice() extrait une section d'une chaine de caractères et la retourne comme une nouvelle chaine de caractères. La
> chaîne de caractères courante n'est pas modifiée.  
> *str.slice(indiceDebut, indiceFin);*


```javascript
function removeChar(str){
 return str.slice(1, -1);
}
```

## Ou bien

:warning: substring function use is not recommended anymore
```javascript
function removeChar(str){
 return str.substring(1, str.length-1);
}
```

[js split function on MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split) :fr:
> La méthode split() permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous
> chaînes.   
> *str.split([séparateur[, qtéMax]]);*


[js shift function on MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/shift) :fr:
> La méthode shift() permet de retirer le premier élément d'un tableau et de renvoyer cet élément. Cette méthode modifie la
> longueur du tableau.   
> *arr.shift();*


[js pop function on MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/pop) :fr:
> La méthode pop() supprime le dernier élément d'un tableau et retourne cet élément. Cette méthode modifie la longueur du
> tableau.   
> *arr.pop();*


```javascript
function removeChar(str){
  str1 = str.split('');
  str1.shift();
  str1.pop();
  return str1.join(''); 
}
```

## ES6
```javascript
const removeChar = str => str.slice(1,-1)
```

# Item 141 Vowel Count :ghost:

## Ma solution

[js charAt function on MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/charAt) :fr:
> La méthode charAt() renvoie une nouvelle chaîne contenant le caractère (ou, plus précisément, le point de code UTF-16)  à la > position indiquée en argument.   
> *str.charAt(index);*

```javascript
function getCount(s) {
  let vowelsCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "a" || s.charAt(i) == "e" || s.charAt(i) == "i" || s.charAt(i) == "o" || s.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
```

## Et aussi 

[js match function on MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/match) :fr:
> La méthode match() permet d'obtenir le tableau des correspondances entre la chaîne courante et une expression rationnelle.  
> *str.match(regexp);*

```javascript
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
```

[js filter function on MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter) :fr:
> La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une
> condition déterminée par la fonction callback.  
> *arr.filter(callback); // callback(elementCourant[, index[, tableauEntier]])
> var nouveauTableau = arr.filter(callback, thisArg);*

```javascript
function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}
```
```javascript
const getCount = str => str.replace(/[^aeiou]/g, '').length;
```
## Aussi possible avec un Switch :wink:

# Item 142 Get middle character :princess:

**Rajouter le lien Mdn vers la fonction substr**

## Ma solution
```javascript
 function getMiddle(s)
{
  return s.length % 2 ? s.substr(s.length / 2 , 1) : s.substr(s.length / 2 - 1, 2);
}
```

## Et aussi
```javascript
function getMiddle(string) {
  let middleIndex = string.length / 2;
  if (string.length % 2 == 0) {
    return string.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return string.charAt(middleIndex);
  }
}
```
## ES6
```javascript
const getMiddle = s => (s.length % 2 ? s.substr(s.length / 2 , 1) : s.substr(s.length / 2 - 1, 2));
```
# Item 151 Jaden Casing Strings :heartpulse:

[Some great help](https://medium.freecodecamp.org/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27) :gb:

Ajouter info sur le map

## Ma solution (did not add .toLowerCase since not required)

```javascript
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}
```
## Ma solution avec .toLowerCase

```javascript
String.prototype.toJadenCase = function () { 
  return this.toLowerCase().split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}
```

## Et aussi

```javascript
String.prototype.toJadenCase = function() {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};
```

Add info on replace function

```javascript
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};
```

# Item 152 Mumbling :unicorn:
## Ma solution

```javascript
function accum(s) {
	let l = s.toLowerCase().split('')
  for(let i = 0; i < l.length; i++) {
    l[i] = l[i].toUpperCase() + l[i].repeat(i)
  }
  return l.join('-')
}
```

## Et aussi

```javascript
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
```

# And just because :alien:
<p align="center"><img src="https://media.giphy.com/media/TNk5NDanFOmv6/giphy.gif" alt="The truth is out there")</p>
