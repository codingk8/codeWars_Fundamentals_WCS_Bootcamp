/* CodeWars Kata: https://www.codewars.com/kata/jennys-secret-message
See link & ressources in the MD file */

/* ES5 */
function greet(name){  
  if(name === "Johnny")
    return "Hello, my love!";
  return "Hello, " + name + "!";
}

/* ES6 */
const greet = n => "Hello, " + (n === "Johnny" ? "my love" : n ) + "!";

/* ES6 upgrade */
const h = n => 'Hello, ' + (n == 'Johnny' ? 'my love' : 'dear ' + n) + '!';
