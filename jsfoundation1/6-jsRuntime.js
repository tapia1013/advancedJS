/***
 *             JAVASCRIPT RUN TIME
 *
 *              ASYNCHRONOUS
 *
 * WEB API - lets us continue on with other code
 * until we get the data or something back from
 * a database or func
 *
 *
 * 1) DOM
 * 2) FETCH()
 * 3) setTimeout()
 *
 *
 * BASICALL WEB API TAKES SOME LOAD OFF OUR CODE AND DOES
 * IT IN THE BACKGROUND WHILE YOUR CODE RUNS AND ONCE
 * ITS DONE DOING WHAT ITS DOING IT RETURNS IT TO YOU
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *                      EVENT LOOP
 * ONLY RUNS ONCE THE CALLSTACK IS EMPTY ANDTHE ENTIRE JS FILE 
 * HAS BEEN READ
 *
 */

// window => shows us the window scope with built in methods


// example might also be interview question
// NO MATTER HOW FAST SETTIMEOUT IS IT STILL GETS SENT TO
// THE WEBAPI SO ITS THE SAME RESULT EVEN IF THE SECONDS
// IS 0 OR 100
console.log('1');
setTimeout(() => { console.log('2') }, 1000)
console.log('3');
// 1
// 3
// undefined
// 2