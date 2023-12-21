const basicOp = (operation, value1, value2) =>

	operation == '+' ? value1 + value2 :
	operation == '-' ? value1 - value2 :
	operation == '*' ? value1 * value2 : value1 / value2;

console.log(basicOp('+', 4, 7));
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7