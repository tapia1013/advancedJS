/***
 *          MEMORY LEAK
 * 
 * Fills up memory heap with more more and more data
 * and the GARBAGE COLLECTION wasnt working cause
 * we kept using the array over and over
 * until it crashed out program
 * 
 *       
 * 
 * 
 *          3 COMMON MEMORY LEAKS
 * 
 * 1) Global Variables
 * 
 * 2) Event Listeners
 * 
 * 3) setInterval
 * 
 * 
 * 
 *          MEMORY IS LIMITED
 * 
 * 
 * 
 */

let array = [];

// infinite loop
for (let i = 5; i > 1; i++) {
  // keeps pushing and makes us run our of memory
  array.push(i - 1)
}


/**
 *         3 COMMON MEMORY LEAKS
 * 
 */

// Memory Leak
// 1) Global Variables
var a = 1;
var b = 1;
var c = 1;


// 2) Event Listeners - keeps adding event listeners but
// you never remove them
var element = document.getElementById('button')
element.addEventListener('click', onClickFunc)

// 3) setInterval
setInterval(() => [
  // references objetcs... that will never be collected
])





