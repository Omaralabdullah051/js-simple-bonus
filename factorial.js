//4! = 4*3*2*1
// let factorial = 1;
// for (let i = 4; i >= 1; i--) {
//     factorial = factorial * i;
// }
// // console.log(factorial);

// get the factorial of 5 by recursion 
function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * factorial(--i);
}
console.log((factorial(5)));

//i * factorial (--i)
//5 * factorial(4)
//5 * 4 * factorial (3)
//5 * 4 * 3 * factorial (2)
//5 * 4 * 3 * 2 * factorial (1)
//5 * 4 * 3 * 2 * 1
//= 120;

function getFactorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * getFactorial(--i);
}
console.log((getFactorial(4)));