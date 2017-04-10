//Ensure that you have installed dotenv!
//npm install dotenv --save

require('dotenv').config();
console.log("*** Start of test. ***");

var someString = process.env.NODE_ENV_1;
var someString2 = process.env.NODE_ENV_2;
var someString3 = process.env.NODE_ENV_3;

console.log(someString);
console.log(someString2);
console.log(someString3);

console.log("*** End of test. ***");