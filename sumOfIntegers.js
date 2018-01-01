// sum of integers 1 to n


let sum = n => {
	if (n <= 1) {
		return 1;
	}

	return n + sum(n-1);
};

let output = sum(5);
console.log(output)

