const readline = require("readline");
const { validateCoordinate } = require("./index");

describe("Geometry Puzzle", () => {
  // Mock readline interface
  const mockQuestion = jest.fn();
  readline.createInterface = jest.fn(() => ({
    question: mockQuestion,
  }));

  // Reset readline mock before each test
  beforeEach(() => {
    mockQuestion.mockReset();
  });

  it("should handle valid custom shape creation", () => {
    // Simulate the execution flow of the program
    console.log("Welcome to the GIC geometry puzzle app");
    console.log("[1] Create a custom shape");
    console.log("[2] Generate a random shape");
    mockQuestion.mock.calls[0][1](1); // Choose option 1
    mockQuestion.mock.calls[1][1]("1 1"); // Enter first coordinate
    mockQuestion.mock.calls[2][1]("5 1"); // Enter second coordinate
    mockQuestion.mock.calls[3][1]("5 5"); // Enter third coordinate
    mockQuestion.mock.calls[4][1]("#"); // Finalize shape
  });

  it("should handle invalid custom shape creation", () => {
    // Simulate the execution flow of the program
    console.log("Welcome to the GIC geometry puzzle app");
    console.log("[1] Create a custom shape");
    console.log("[2] Generate a random shape");
    mockQuestion.mock.calls[0][1](1); // Choose option 1
    mockQuestion.mock.calls[1][1]("1 1"); // Enter first coordinate
    mockQuestion.mock.calls[2][1]("5 1"); // Enter second coordinate
    mockQuestion.mock.calls[3][1]("5 1"); // Enter invalid coordinate (repeated point)
    // Add your expectations here based on the expected console output
  });

  // Add more test cases for other scenarios
});
