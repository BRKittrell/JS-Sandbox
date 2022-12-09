//OBJECT LITERALS
const myObj = {
  a: 1,
};
myObj["b"] = 2; //Adding property to myObj; will appear last
console.log(myObj); //=> {a: 1, b: 2}
console.log(myObj["a"]); //=> 1
//Sometimes it is desirable to assign a variable as a "key" as follows:
const key = "b";
console.log(myObj[key]); //=> 1

//ACCESSING VALUES OF AN OBJECT USING A FUNCTION
var vehicle = {
  make: "Ram",
  model: "1500",
};
vehicle["year"] = "2022";

console.log(vehicle);
console.log(vehicle.year);
