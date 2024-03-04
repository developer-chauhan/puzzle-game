const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
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

module.exports = validateCoordinate;
module.exports = isPointInsideShape;
