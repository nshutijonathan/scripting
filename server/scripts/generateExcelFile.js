import fs from "fs";
import { randomEmails } from "../helpers/randomEmails.js";
import { randomPhoneNumbers } from "../helpers/randomPhoneNUmbers.js";
let jsn = [
  {
    names: "Amani Israel",
    NID: "119928004270414455",
    phone: randomPhoneNumbers(),
    gender: "male",
    email: randomEmails(),
  },
];
var data = "";
for (var i = 0; i < jsn.length; i++) {
  data =
    data +
    jsn[i].names +
    "\t" +
    jsn[i].NID +
    "\t" +
    jsn[i].phone +
    "\t" +
    jsn[i].gender +
    "\t" +
    jsn[i].email +
    "\n";
}
console.log("data", data);
for (let p = 0; p <= 50000; p++) {
  await new Promise((resolve, reject) => {
    fs.appendFile("filename.xls", data, (err) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}
