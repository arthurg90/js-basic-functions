// Create a function, wow, that takes a number, n, as an argument. The function should return the word "Wo...ow", where there are n "o"s.

let wow = n => {

	let x = "";								//empty container

	for (let i = 0; i < n; i += 1) {		//loop for counting number of "o"'s to put in container
		x += "o";							//concatenate an "o" to container every time the loop runs

	}

	return ("w" + x + "w");					//returns w(n of "o")w (get the code to return something 1st)

};

let output = wow(0)							//output for feedback
console.log(output)


											//string.repeat method is another way

