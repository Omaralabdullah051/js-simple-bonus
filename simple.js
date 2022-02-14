// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// recursion 
function consoleNumber(i) {
    if (i > 5) {
        return;
    }
    console.log(i);
    consoleNumber(i + 1);
}
consoleNumber(1);

function consoleNumber(i) {
    if (i > 5) {
        return;
    }
    console.log(i);
    consoleNumber(i + 1);
}
consoleNumber(1);