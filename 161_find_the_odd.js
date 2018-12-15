/* CodeWars "Find the odd"
See links & ressources in the MD file */

/* Ma solution */
function findOdd(A) {
  let c = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (A[i] === A[j]) {
                c++;
        }
    }
    if (c % 2 !== 0) {
        return A[i];
     }
  }
}


/* Autres solutions */

const findOdd = A => A.filter(x => A.filter(v => x === v).length % 2 === 1).reduce(a => a);

function findOdd(A) {
  for(var i = 0; i < A.length; i++){  
    //Query the number of times that this 'i' element appears
    //then verify if that number of times is odd. If it is true, then return
    //that 'i' element
    if((A.filter(function(item){return item == A[i]; })).length % 2 != 0){
      return A[i];
    }
  }
  return 0;
}

function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

/* A creuser, la signification du carte en JS */
function findOdd(A) {
  return A.reduce((l, r) => l ^ r);
}

function findOdd(A) {
  var odd;
  A.forEach( function(item, i, arr) {
    if ( A.filter( val =>  val === item ).length % 2 !== 0) {
     odd = item;
    }
  });
  return odd;
}

/* That's all folks! */
