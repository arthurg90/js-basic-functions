/*
Create a function max, that takes two numbers as arguments. The function should return the highest of the numbers.
*/



let max = (a, b) => {
	if (b>a) {
		return b

	}  else if (a>b) {
		return a		
	}
}

let output = max(3, 8);
console.log(output);