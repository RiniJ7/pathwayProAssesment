const numIslands = require("./islandCount.js");

test("Example 1", () => {
  const grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ];
  expect(numIslands(grid)).toBe(1);
});

test("Example 2", () => {
  const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];
  expect(numIslands(grid)).toBe(3);
});

