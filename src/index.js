module.exports = function solveEquation(equation) {
  var elements = equation.split(' ');
  for (var i = 0; i < elements.length; i ++) {
    if (elements[i] == '-') {
      elements[i + 1] = elements[i] + elements[i + 1];
    }
  }
  var numbers = [];
  numbers.a = parseInt(elements[0], 10);
  numbers.b = parseInt(elements[4], 10);
  numbers.c = parseInt(elements[8], 10);
  
  var sqrtd = Math.sqrt((Math.pow(numbers.b, 2) - (4 * numbers.a * numbers.c)));
  var x1 = Math.round((-numbers.b + sqrtd) / (2 * numbers.a));
  var x2 = Math.round((-numbers.b - sqrtd) / (2 * numbers.a));
  if (x1 > x2) {
    return [x2, x1];
  } else {
    return [x1, x2];
  }

}
