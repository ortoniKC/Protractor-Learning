// class Tele {
//   constructor() {}

//   sendSMS() {
//     console.log("sending SMS");
//   }
// }
// class Op extends Tele {
//   hey() {
//     console.log("Hey");
//   }
// }

class Mobile {
  //   con;
  constructor() {
    // super();
    // this.con = a;
  }
  sendSMS() {
    super.sendSMS();
    console.log("sending SMS from Tele");
  }

  makeCall() {
    console.log("Calling to koushik");
  }

  makeCall(numberOrName) {
    if (typeof numberOrName == "number") {
      console.log(`Calling to number ${numberOrName}`);
    } else if (typeof numberOrName == "string") {
      console.log(`Calling to name ${numberOrName}`);
    }
  }
  callCons() {
    console.log(this.con);
  }
}
export default new Mobile();
// exports.Mobile = Mobile;
