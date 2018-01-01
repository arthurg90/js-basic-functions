let factorial = n => {
    if (n <= 1) {
        return 1;
    }
    
    return n * factorial(n - 1);
};

let output = factorial(20)
console.log(output)



