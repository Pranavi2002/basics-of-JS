//jshint esversion:6

let fruits = ["Apple", "Banana", "Orange"];

// const getFruits = () => {
//   fruits.forEach((data) => {
//     console.log(data);
//   });
// };
// getFruits();

// const getFruits = () => {
//   setTimeout(() => {
//     fruits.forEach((data) => {
//       console.log(data);
//     });
//   }, 1000);
// };
// getFruits();

// const getFruits = () => {
//   setTimeout(() => {
//     fruits.forEach((data) => {
//       console.log(data);
//     });
//   }, 1000);
// };
// const postFruit = (fruit) => {
//   setTimeout(() => {
//     fruits.push(fruit);
//   }, 2000);
// };
// postFruit("Kiwi");
// getFruits();
//Kiwi will not print here, as postfruit took 2 seconds to execute but fruit took only 1 second to execute

const getFruits = () => {
  setTimeout(() => {
    fruits.forEach((data) => {
      console.log(data);
    });
  }, 1000);
};
const postFruit = (fruit, callback) => {
  setTimeout(() => {
    fruits.push(fruit);
    callback();
  }, 2000);
};
postFruit("Kiwi", getFruits);
