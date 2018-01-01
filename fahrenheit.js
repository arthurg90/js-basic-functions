/*

Create a function, fahrenheit, that takes a temperature in Celsius and converts it to Fahrenheit

*/



let fahrenheit = celsius => {
	return (celsius * 1.8 + 32);		
}

let output = fahrenheit(10);
console.log(output);