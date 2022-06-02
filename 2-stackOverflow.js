/**
 *         STACK OVERFLOW 
 * 
 * What happens if we keep calling funcs stacked/nested
 * over each other?
 * Funcs nested in each other and being stacked ontop
 * eachother is called a stack overflow
 * 
 * 
 */


// recursion aka stack overflow
function inception() {
  inception()
}
inception()// ERROR: maximum call stack size exceeded


