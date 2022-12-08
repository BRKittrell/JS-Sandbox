//Conditional 1: Old enough to drink
function isOldEnoughToDrink(age) {
      if(age<21){
        console.log(false)
        return false;
      }else{
        console.log(true)
        return true;
      }
  }
  isOldEnoughToDrink(22)

  //Conditional 2: Old enough to drive
  function isOldEnoughToDrive(age) {
    if(age<16){
        console.log(false)
        return false;
      }else{
        console.log(true)
        return true;
      }
  }
  isOldEnoughToDrink(15)

//
  function isOldEnoughToVote(age) {
    if(age<18){
        console.log(false);
        return false
    }else{
        console.log(true);
        return true
    }
  }
  isOldEnoughToVote(18)

  function isOldEnoughToDrinkAndDrive(age) {
    if (age >= 21){
        console.log (false);
        return false;
    }else{
        return false;
    }
    }
    isOldEnoughToDrinkAndDrive(22)