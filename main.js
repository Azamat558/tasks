//todo    №1
let arr = "";
for (let i = 0; i < 7; i++) {
  arr += "#";
  console.log(arr);
}

//todo    №2
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 != 0) {
    console.log("Fizz");
  } else if (i % 5 == 0 && i % 3 != 0) {
    console.log("Buzz");
  } else if (i % 5 == 0 && i % 3 == 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}

//todo    №3

for (i = 1; i <= 6; i++) {
  let azx = "";
  for (let j = 0; j < 6; j++) {
    azx += " #";
  }
  console.log(azx);
  let ml = "#";
  for (let j = 1; j < 6; j++) {
    ml += " #";
  }
  console.log(ml);
}

//todo    №4

function min(a, b) {
  if (a < b) {
    console.log(a);
  } else if (b < a) {
    console.log(b);
  }
}
min(0, -10);

//todo    №5

function isEven(num) {
  if (num == 0) {
    return "true";
  } else if (num == 1) {
    return "false";
  } else {
    return isEven(num - 2);
  }
}
console.log(isEven(75));
console.log(isEven(50));

//todo    №8
let array = ["A", "B", "C"];
array.reverse();
console.log(array);

//todo    №11
let mas = [[1, 2, 3], [4, 5], [6]];
let total = mas.reduce(function (a, b) {
  return a.concat(b);
});
console.log(total);

//todo    №25
let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function monthName(number) {
  return month[number];
}

let number = month.indexOf("May");
console.log(monthName(3));
console.log(number);
