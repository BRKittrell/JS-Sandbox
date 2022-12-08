//Returns the value of the property at given key; returns undefined.

var obj = {
    key: 'value'
  };
   
  function getProperty(obj, key) {
   return obj[key]; 
  }
  console.log(obj.key) //=> value
  
//   var output = getProperty(obj, 'key');
//   console.log(output);

person = {
    name: 'Sam',
    city: 'Cleveland',
    age: 20
  };
  
  function removeProperty(person, key) {
    delete obj[key];
  }
  
  removeProperty(person, 'age');
  console.log(person); //=> { name: 'Sam', city: 'Cleveland' }


  obj = {
    name: 'Sam',
    age: 20
  };
  
  function removeProperty(obj, key) {
    delete obj[key];
  }
  
  removeProperty(obj, 'name');
  console.log(obj.name); //=> undefined because it was deleted
  console.log(obj.age); //=> 20