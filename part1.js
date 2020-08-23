const math = require('mathjs');

export const calculator = (term) => {
  var result = 0;
  result = math.evaluate(term);

  return result;
};

console.log(calculator('(5+3)*3/8+3'));
console.log(calculator('((5+3)*3)/8+3'));
console.log(calculator('(5*3)*(3/8)+3'));
