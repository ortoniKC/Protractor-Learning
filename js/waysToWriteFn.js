function add() {
    console.log("Default function");
}
console.log(add());

var fn = (a, b) => {
    return a + b;
}
console.log(fn(10, 10));