/*
- Pop removes (pop's off) the last element of an array.
- Syntax: varName.pop()
 */

//Example 1:
var dogNames = ["Fido", "Lucky", "Spot", "Mittens"];
console.log(dogNames.pop());
/*
-Output => Mittens
-Explanation: The array is iterated over and the last 
element is removed and returned.
 */

//Example 2:
function catNames(cats) {
  var myCats;

  for (var i = 0; i < cats.length; i++) {
    myCats = cats.pop();
    console.log(myCats);
  }
}
catNames(["Fluffy", "Garfield", "Sparky"]);

/*
Output
Each element is printed to the console with the exception of the popped element.

*/
