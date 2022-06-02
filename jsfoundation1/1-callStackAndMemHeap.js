// Call stack + Memory Heap
/**
 *              NOTES
 * 
 * Memory Heap - free store that the JS engine provides for us which can be used to STORE ANY type of data, 
 * in an unordered fashion there's no order to this memory,
 * it just allows us to use variables to point to different storage areas just like a little cardboard
 * Basically adds data into storage boxed for us, just  place for us to store our information
 *  
 * 
 * 
 * 
 * Call Stack - allocates function to memory, we can think of callstack as a region in memory
 * which operates in the first in last out mode, adds calculate() ontop of the stack and then removes it
 * 
 * 
 */


const number = 610; // allocate memory for number
const string = 'some text'; // allocates memory for a string
const human = { // allocates memory for an object... and its values
  first: 'Jay',
  last: 'Tee'
}



// Call stack
function subtractTwo(num) {
  return num - 2;
}

function calculate() {
  const sumTotal = 4 + 5;
  return subtractTwo(sumTotal);
}