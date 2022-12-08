const arr = ['a', 'b', 'a', 'a'];

let count = 0;

arr.forEach(element => {
  if (element === 'a') {
    count += 1;
  }
});

console.log(count); 

const arr = ['a', 'b', 'a', 'a'];

let count = 0;

for (const element of arr) {
  if (element === 'a') {
    count += 1;
  }
}

console.log