/*The benefit of callback functions:
- Developing asynchronous JS
- JS is evaluated from the top down
*/

function fox() {
  console.log("Ring-ding-ding-ding-dingeringeding!");
  console.log("Joff-tchoff-tchoffo-tchoffo-tchoff!");
}

/*This is the callback function*/
function whatDoesTheFoxSay(action) {
  action();
}

whatDoesTheFoxSay(fox);
