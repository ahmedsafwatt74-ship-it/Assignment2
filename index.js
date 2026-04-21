const str = "123";
const result1 = Number(str) + 7;
console.log(result1);

function checkFalsy(val) {
    if (!val) return "Invalid";
}
console.log(checkFalsy(0));

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}

const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(n => n % 2 === 0);
console.log(evens);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged);

function getDay(num) {
    switch(num) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
    }
}
console.log(getDay(2));

const strings = ["a", "ab", "abc"];
const lengths = strings.map(s => s.length);
console.log(lengths);

function checkDivisibility(num) {
    if (num % 3 === 0 && num % 5 === 0) return "Divisible by both";
}
console.log(checkDivisibility(15));

const square = (n) => n * n;
console.log(square(5));

const person = {name: 'John', age: 25};
const formatPerson = ({name, age}) => `${name} is ${age} years old`;
console.log(formatPerson(person));

function sumAll(...nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));

function waitThreeSeconds() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Success"), 3000);
    });
}

function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([1, 3, 7, 2, 4]));

const obj = {name: "John", age: 30};
console.log(Object.keys(obj));

const sentence = "The quick brown fox";
console.log(sentence.split(" "));

/* ESSAY QUESTIONS ANSWERS:

1. forEach is an array method that uses a callback function. You cannot stop it once 
   it starts. for...of is a standard loop that works on all iterables and allows 
   the use of break and continue. Use forEach for simple array logic and 
   for...of when you need loop control or async handling.

2. Hoisting moves declarations to the top of their scope. var is hoisted and 
   initialized as undefined. let and const are hoisted but not initialized, 
   creating the Temporal Dead Zone (TDZ). Accessing a variable in the TDZ 
   results in a ReferenceError.
   Example:
   console.log(a); // undefined (hoisting)
   var a = 5;

3. == compares values after converting types (coercion), so 5 == "5" is true. 
   === compares both the value and the data type without conversion, 
   so 5 === "5" is false.

4. try-catch is used for error handling. In async code, it is vital because 
   it catches errors from rejected promises that would otherwise cause 
   unhandled rejection errors or crash the application.

5. Type conversion is explicit (done manually by the dev), like Number("10"). 
   Type coercion is implicit (done automatically by JavaScript), like 
   10 + "5" resulting in "105".
*/