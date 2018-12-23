/* CodeWars "Are they the "same"? " 
See links & ressources in the MD file */


/* My 1st solution */

function comp(array1, array2){
  if (!array1 || !array2 || array1.length !== array2.length) return false;
  return array1.map(x => x * x).sort().toString() === array2.sort().toString();
}

/* Other solutions */

function comp(a, b) {
  return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}

function comp(array1, array2){
  if(array1 === null || array2 === null || array1.length != array2.length)return false;
  a1 = array1.sort((x,y)=>x-y);
  a2 = array2.sort((x,y)=>x-y);
  for(let i = 0; i < a1.length; i++){
    if(a1[i] * a1[i] != a2[i])return false;
  }
  return true;
}

/* That's all folks! */

