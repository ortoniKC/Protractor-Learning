console.log(isPrime(7));
function isPrime(n) {
    let c = 0;

    for (let i = 2; i < n / 2; i++) {
        if (n % i == 0) c++;
    }
    return c == 0 ? "prime" : "not a prime"
    // if (c == 0) {
    //     return "Prime"
    // } else return "not a prime"
}

let obj = [{ 'name': 'koushik', 'company': 'Google' }, { 'name': 'hey' }]
console.table(obj.length)
// name()
// let name = () => {
//     console.log("hi");

// }
// name()


