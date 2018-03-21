const my_module = require('./mathlib');     
const math = new my_module();
console.log(math.add(1,2)); 
console.log(math.multiply(2,3));
console.log(math.square(3));
console.log(math.random(10,20));

// my_module.add(5,6); 

