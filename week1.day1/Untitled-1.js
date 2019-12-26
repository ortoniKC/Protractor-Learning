let a = [1, 2, 3, 4, 5]
console.log(a);


function isPrime(n) {
    let c = 0;

    for (let i = 2; i < n; i++) {
        if (n % i == 0) c++;
    }
    return c == 0 ? "prime" : "not a prime"
    // if (c == 0) {
    //     return "Prime"
    // } else return "not a prime"
}
console.log(isPrime(10));


let add = (a, b) => {
    return a + b
}
console.log(a.reduce(add, 0));