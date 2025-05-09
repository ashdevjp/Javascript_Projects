import formatCurrency, {} from  '../scripts/utils/money.js';

console.log('test suite: formatCurrency');

console.log('converts cents to dollars');

if (formatCurrency(100) === '1.00') {
  console.log('passed');
}
else {
  console.log('failed');
}  

console.log('works with zero');

if (formatCurrency(0) === '0.00') {
  console.log('passed');
}
else {
  console.log('failed');
}


console.log('rounds up to the nearest cent');

if (formatCurrency(2000.5) === '20.05') {
  console.log('passed'); 
}
else {
  console.log('failed');
}
