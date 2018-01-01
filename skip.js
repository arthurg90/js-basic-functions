//Create a function, skip, that takes two numbers, skip and max. The function should return the total of the numbers from 1 to max excluding any numbers divisible by skip.

//two functions - one for summing the numbers 
//another for excluding the numbers divisible by skip



let skip = (skip, max) => {
	let max = n => {
		if (n <= 1) {
			return 1;
		}
		return n + max(n-1);

	let skip = n => {
		if 
	}

};


let output = skip(4, 20); // 150 
console.log(output)