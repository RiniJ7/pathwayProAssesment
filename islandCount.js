let numIslands = function (grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  let count = 0;
  let m = grid.length;
  let n = grid[0].length;
  if (m < 1 || m > 300 || n < 1 || n > 300) {
    throw new Error("Invalid grid dimensions: 1 <= m, n <= 300");
  }

  for (let i = 0; i < m; i++) {
    if (!grid[i] || grid[i].length !== n) {
      throw new Error(
        "Invalid grid: Rows must have the same number of columns."
      );
    }

    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count = count + dfs(grid, i, j);
      }
    }
  }
  function dfs(grid, row, col) {
    //base cases
    if (
      row < 0 ||
      row > grid.length - 1 ||
      col < 0 ||
      col > grid[row].length - 1 ||
      grid[row][col] === "0"
    ) {
      return;
    }
    grid[row][col] = "0";

    dfs(grid, row + 1, col);
    dfs(grid, row - 1, col);
    dfs(grid, row, col + 1);
    dfs(grid, row, col - 1);

    return 1;
  }
  return count;
};

module.exports = numIslands;
