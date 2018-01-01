// Create a function, factorOf, that takes two numbers as arguments. The function should return true if the first number is a factor of the second number (i.e. the second number divided by the first has no remainder) and false if not.

let factorOf = (x, y) => {
	if (y%x === 0) {
		return true;
	}

return false;
}

let output = factorOf(3, 10);
console.log(output);