'use strict';
/*Create a function that takes infinite count of elements, operator and prints their sum. If there's no
operator, then default should be + 
printSum("*", 1, 2, 3); // 9
printSum(1, 2, 3, 4, 5); // 15
printSum("-", 1, 2, 3, 6, 7); // -17
printSum("**", 2, 3, 2); // 64 */

function sumPrint(operator, ...args) {
  let result;
  result = args.reduce((sum, current) => sum + current);
  return result;

  if (operator === '*') {
    result = args.reduce((sum, current) => sum * current);
    return result;
  }

  if (operator === '-') {
    result = args.reduce((sum, current) => sum - current);
    return result;
  }

  if (operator === '**') {
    result = args.reduce((sum, current) => sum ** current);
    return result;
  }

  return result;
}
console.log(sumPrint(1, 2, 3, 6, 7));
