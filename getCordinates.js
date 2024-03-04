const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const validateCoordinate = require("./validCordinate");
const isPointInsideShape = require("./validCordinate");

function getCoordinate(index, shape) {
  rl.question(`Please enter coordinates ${index} in x y format: `, (input) => {
    const [x, y] = input.split(" ").map((coord) => parseInt(coord));
    if (validateCoordinate(x, y, shape)) {
      shape.push({ x, y });
      console.log(`Your current shape is incomplete`);
      shape.forEach((point, i) =>
        console.log(`${i + 1}:(${point.x},${point.y})`)
      );
      rl.question(
        "Please enter # to finalize your shape or enter coordinates in x y format: ",
        (response) => {
          if (response === "#") {
            finalizeShape();
          } else {
            getCoordinate(index + 1);
          }
        }
      );
    } else {
      console.log(`New coordinates(${x},${y}) is invalid!!!`);
      console.log("Not adding new coordinates to the current shape.");
      console.log("Your current shape is incomplete");
      shape.forEach((point, i) =>
        console.log(`${i + 1}:(${point.x},${point.y})`)
      );
      getCoordinate(index);
    }
  });
}

module.exports = getCoordinate;
