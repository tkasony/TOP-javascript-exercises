// let hey = "hey";
// let log = "";
// const repeatString = function () {
//   for (i = 0; i < 3; i++) {
//     log = log + hey;
//   }
//   return log;
// };
// Do not edit below this line

// test 2
// let stringToRepeat = "hello";
// let log = "";
// const repeatString = function () {
//   for (i = 0; i < 10; i++) {
//     log = log + stringToRepeat;
//   }
//   return log;
// };

// test 2
// let stringToRepeat = "hi";
// let log = "";
// const repeatString = function () {
//   for (i = 0; i < 1; i++) {
//     log = log + stringToRepeat;
//   }
//   return log;
// };

// test 3
// let stringToRepeat = "bye";
// let log = "";
// const repeatString = function () {
//   for (i = 0; i > 0; i++) {
//     log = log + stringToRepeat;
//   }
//   return log;
// };

// test 4
// const repeatString = function (word, times) {
//   if (times < 0) return "ERROR";
//   let string = "";
//   for (let i = 0; i < times; i++) {
//     string += word;
//   }
//   return string;
// };

// const repeatString = function (word, number) {
//   let string = "";
//   for (let i = 1; i <= number; i++) {
//     string += word;
//   }
//   return string;
// };

// last test
const repeatString = function (word) {
  let string = "";
  if (word.length === 0) {
    string = "";
  } else {
    string = word;
  }

  return string;
};

module.exports = repeatString;
