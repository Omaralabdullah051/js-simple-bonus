// // get the sum of numbers,1 to 10;by recursion with prefix decremental
function sumNumbers(i) {
    if (i == 1) {
        return i;
    }
    return i + sumNumbers(--i);
}
console.log((sumNumbers(10)));

//get the sum of numbers,1 to 10;by recursion with prefix incremental
function sum(i) {
    if (i == 10) {
        return i;
    }
    return i + sum(++i);
}
console.log((sum(1)));

// get the factorial by recursion with prefix decrement way 
function getFactorial(i) {
    if (i == 1) {
        return i;
    }
    return i * getFactorial(--i);
}
console.log((getFactorial(5)));

// get the factorial by recursion with prefix increment way 
function factorial(i) {
    if (i == 5) {
        return i;
    }
    return i * factorial(++i);
}
console.log((factorial(1)));

// output the numbers 1 to 10 by recursion 
function numbers(i) {
    if (i == 11) {
        return;
    }
    console.log(i)
    numbers(++i);
}
(numbers(1));

// get the result of sum; 1 to 10;
function sumOfNumbers(n) {
    if (n <= 1) {
        return n;
    }
    return n + sumOfNumbers(--n);
}
console.log((sumOfNumbers(10)));