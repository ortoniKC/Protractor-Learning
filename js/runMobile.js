const mob = require('./Mobile.js')
const mobile = new mob.Mobile('as');

mobile.makeCall()
mobile.makeCall(123)
mobile.makeCall('kouhsik')
mobile.sendSMS()
console.log(mobile.con);
mobile.callCons()
mobile.hey()


arr = [1,2,3]
console.log("Foreach");

arr.forEach(element => {
    console.log(element);
});
arr.push(4)

console.log("Of loop");
arr.shift(5)
for (const i of arr) {
    console.log(i);
}

// console.log("in loop");

// for (const key in arr) {
//     console.log(arr[key])
// }
// let i =10;
// do{
//     i =11;
// }
// while (i < 10) {
//     console.log(i);
//     i++;
// }
