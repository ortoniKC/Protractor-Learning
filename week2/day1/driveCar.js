let car = require("./Car.js");
let myCar = new car.Car();
console.log(myCar.isInsured);
console.log(myCar.getNoOFSeats());
myCar.isInsured = false;
console.log(myCar.isInsured);
myCar.vehicleType = "two wheeler"
console.log(myCar.getVehicleType());
myCar.soundHorn()
let veh = require('./Car')
let v = new veh.Vehicle('4 wheeler')
v.applyBrake()
console.log(v.vehicleType);

