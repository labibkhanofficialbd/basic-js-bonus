// 6! = 6*5*4*3*2*1

function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * factorial(i - 1);
}
// 6 * 5 * 4 * 3 * 2 * 1
console.log(factorial(6));