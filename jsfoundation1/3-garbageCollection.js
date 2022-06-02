/***
 *         GARBAGE COLLECTION
 * 
 * JS does auto garbage collection that only data that
 * is useful is kept and frees memory from useless things
 * 
 * MARK AND SWEEP algo is what garbage collection does in JS
 * 
 * 
 * 
 *  
 */

// Garbage Collection
var human = {
  first: 'Jay',
  last: 'Tee'
}

// {first: 'Jay',last: 'Tee'} is still in the memory heap
// but we dont need it anymore
human = 5


function sub() {
  // GARBAGE COLLECTOR SWEEPS HUMAN IN HERE
  var human = {
    first: 'Jay',
    last: 'Tee'
  }
}
