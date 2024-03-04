const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let shape = [];

function main() {
  console.log("Welcome to the GIC geometry puzzle app");
  console.log("[1] Create a custom shape");
  console.log("[2] Generate a random shape");

  rl.question("Choose an action: ", (choice) => {
    switch (parseInt(choice)) {
      case 1:
        createCustomShape();
        break;
      case 2:
        generateRandomShape();
        break;
      default:
        console.log("Invalid choice. Please try again.");
        main();
    }
  });
}

function createCustomShape() {
  shape = [];
  console.log("Create a custom shape");
  getCoordinate(1);
}

function getCoordinate(index) {
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

function validateCoordinate(x, y, shape) {
  if (isNaN(x) || isNaN(y)) {
    console.log(
      "Invalid coordinate format. Please enter coordinates in x y format."
    );
    return false;
  }
  if (shape.length < 1) {
    return true;
  }
  console.log("shape", shape);

  // Check if coordinates are within a valid range (e.g., between 0 and 10)
  const maxX = 10;
  const maxY = 10;
  if (x < 0 || x > maxX || y < 0 || y > maxY) {
    console.log(
      `Coordinates (${x}, ${y}) are out of range. Please enter coordinates within 0 and ${maxX} for x and 0 and ${maxY} for y.`
    );
    return false;
  }

  // Check if the coordinates repeat a previously entered point
  if (isPointInsideShape(x, y)) {
    console.log(
      `Coordinates (${x}, ${y}) are already included in the shape. Please enter a different coordinate.`
    );
    return false;
  }
  return true;
}

function finalizeShape() {
  console.log("Your finalized shape is");
  shape.forEach((point, i) => console.log(`${i + 1}:(${point.x},${point.y})`));
  console.log(
    "Please key in test coordinates in x y format or enter # to quit the game"
  );
  testCoordinates();
}

function testCoordinates() {
  rl.question("", (input) => {
    if (input === "#") {
      console.log("Thank you for playing the GIC geometry puzzle app");
      console.log("Have a nice day!");
      rl.close();
    } else {
      const [x, y] = input.split(" ").map((coord) => parseInt(coord));
      if (isPointInsideShape(x, y)) {
        console.log(`Coordinates (${x} ${y}) is within your finalized shape`);
      } else {
        console.log(
          `Sorry, coordinates (${x} ${y}) is outside of your finalized shape`
        );
      }
      testCoordinates();
    }
  });
}

function isPointInsideShape(x, y) {
  const duplicatePoint = shape.some((point) => point.x === x && point.y === y);
  if (duplicatePoint) {
    console.log(
      `Coordinates (${x}, ${y}) are already included in the shape. Please enter a different coordinate.`
    );
    return true;
  }
  return false; // Placeholder logic
}

function generateRandomShape() {
  const numPoints = Math.floor(Math.random() * 6) + 3; // Generate a random number between 3 and 8
  const shape = [];

  for (let i = 0; i < numPoints; i++) {
    const x = Math.floor(Math.random() * 11); // Generate a random x coordinate between 0 and 10
    const y = Math.floor(Math.random() * 11); // Generate a random y coordinate between 0 and 10
    shape.push({ x, y });
  }

  console.log("Your random shape is");
  shape.forEach((point, i) => console.log(`${i + 1}:(${point.x},${point.y})`));

  // Proceed to the puzzle section
  console.log(
    "Please key in test coordinates in x y format or enter # to quit the game"
  );
  testCoordinates();
}

main();
