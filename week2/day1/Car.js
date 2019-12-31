class Vehicle {
    vehicleType;
    constructor(type) {
        console.log('IM in cons');
        this.vehicleType = type
    }
    insurance = "5 years mandatory";
    applyBrake() {
        console.log("brake applied");
    }
    soundHorn() {
        console.log("Sound Horn");
    }
    // setVechicleType(type) {
    //     this.vehicleType = type;
    // }
}
exports.Vehicle = Vehicle;
class Car extends Vehicle {
    constructor() {
        super();
        console.log("Im in Car constructor");
    }
    isInsured = true;
    getColor() {
        return "black";
    }

    getNoOFSeats() {
        return 4;
    }
    getVehicleType() {
        return this.vehicleType;
    }
}

exports.Car = Car;
