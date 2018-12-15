/* CodeWars Count the smiley faces */

/* My 1st solution which failed 3 tests out of 105 and I don't know why (so pissed) */

function countSmileys(arr) {
    let c = 0;
    let r = /[:||;][-||~]*[)||D]/;
    for (let i = 0; i < arr.length; i++) {
        if (r.test(arr[i])) {
            c++
        } 
    }
    return c;
}
countSmileys([':D',':~)',';~D',':)']);


/* My solution that worked */

function countSmileys(arr) {
let faces = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
let count = 0;
for (let i=0; i<arr.length; i++){
  for (let j=0; j<faces.length; j++){
    if (arr[i] === faces[j]){
      count++;
    }
  }
  }
return count;
}


/* Other solutions */

function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}


const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);


const SMILING = /[:;]{1}[-~]?[)D]{1}/;
const countSmileys = (faces) => faces.filter(face => SMILING.test(face)).length;


countSmileys=arr=> arr.filter(v => /(:|;)(-|~)?(\)|D)/.test(v)).length; 


countSmileys = (arr) => arr.filter(e => /[:;][-~]?[)D]/.test(e)).length;

/* That's all folks! */
