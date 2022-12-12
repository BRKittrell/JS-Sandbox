/*The benefit of callback functions:
- Developing asynchronous JS
- JS is evaluated from the top down; doesn't stop code from running
*/

function fox() {
  console.log("Ring-ding-ding-ding-dingeringeding!");
  console.log("Joff-tchoff-tchoffo-tchoffo-tchoff!");
}

/*This is the callback function*/
function whatDoesTheFoxSay(foxSays) {
  foxSays();
}

whatDoesTheFoxSay(fox);
