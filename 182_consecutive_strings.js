/* CodeWars "Consecutive strings" 
See links & ressources in the MD file */


/* My solution */

function longestConsec(strArr, k) {
  let n = strArr.length;
  longest = "";
  str = "";

  if (n === 0 || k > n || k <= 0) {
    return "";
  }

  for (let i= 0; i < n; i++) {
    let currentStr = strArr.slice(i, k+i).join("");
    if (currentStr.length > str.length) {
      str = currentStr;
    }
  }
  return str;
}


/* Other solutions */

function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }
  return strarr.reduce((long, item, i) => {
    const currString = strarr.slice(i, i + k).join('');
    return (currString.length > long.length)
      ? currString
      : long;
  }, '');
}

const longestConsec = (a, k) => k > 0 && k <= a.length ? a.reduce((p, c, i) => (c = a.slice(i, i + k).join('')).length > p.length ? c : p, '') : '';

const longestConsec = (strarr, k) => k <= 0 || k > strarr.length ?
    ''
    : strarr.reduce((longest, curr, i) => {
        curr += strarr.slice(i + 1, k + i).join('')
        return curr.length > longest.length ? curr : longest
      }, '')

/* That's all folks! */
