/* 171_convert_string_to_camel_case */

/* OK, tricky one, you want the first letter to remain lower case if it is at the beginning + this thing about returning
an empty string if needed */

// My solution
function toCamelCase(str){
   if (str.length === 0) {
        return ""
    } else if (str.length > 0) {
        let arr = str.split(/[^A-Za-z0-9]/);
        return arr.map(function(item) {
            if ( arr.indexOf(item) > 0 ) {
                return item.charAt(0).toUpperCase() + item.slice(1);
            } else {
                return item;
            }
        console.log(arr);
        }).join("");
    }
}
toCamelCase("the-stealth-warrior"); // returns "theStealthWarrior"


// Other solutions

function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}

function toCamelCase(str){
  return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
}

/* That's all folks! */
