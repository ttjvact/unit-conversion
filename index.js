import { length } from "./length/length.js"

var calc = new length.M(100).to(length.Ft).to(length.M);

console.log("toFt:"+calc.result);