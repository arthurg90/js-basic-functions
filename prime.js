//prime number is any number bigger than 1 that is only divisible by itself e.g. 2,3,5,7,11,13 etc.



let factorOf = (a, b) => b % a === 0;


let prime = n => {
	if (n === 1) {						//1 is not a prime number but there's no way to write this into the for loop
		return false;
	}
	for (let i = 2; i < n; i += 1)	{	//don't need to check the number itself as all numbers are self-divisible
		if (factorOf(i, n)) {
			return false;
		}
	}

	return true;

};


console.log(
	
	prime(2),
	prime(7),
	prime(997),
	"|",					//pipe to separate them
	prime(1),
	prime(12),
	prime(16),
	prime(24),
	
)