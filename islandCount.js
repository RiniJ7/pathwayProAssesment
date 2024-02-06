//"numIslands" is the function to calculate the number of Islands/cluster of 1's
let numIslands = function (grid) {
  // "count" keeps track of the island count
  // "m" initialized to grid row length
  let count = 0;
  let m = grid.length;

  //start of loop through each cell in a grid
  for (let i = 0; i < m; i++) {
    // "n" initialized to grid column length
    let n = grid[i].length;

    //loop through each cell in a row
    for (let j = 0; j < n; j++) {
      //If a "1" is identified, increment the count by the return value of dfs ie "1"
      if (grid[i][j] === "1") {
        count = count + dfs(grid, i, j);
      }
    }
  }
  //defining "dfs" function
  function dfs(grid, row, col) {
    //base cases: access cell above the grid||below the grid||to left of grid||to right of grid||if cell is water
    if (
      row < 0 ||
      row > grid.length - 1 ||
      col < 0 ||
      col > grid[row].length - 1 ||
      grid[row][col] === "0"
    ) {
      return;
    }
    //setting current value of grid to "0"
    grid[row][col] = "0";

    dfs(grid, row + 1, col); //down
    dfs(grid, row - 1, col); //up
    dfs(grid, row, col + 1); //right
    dfs(grid, row, col - 1); //left

    return 1;
  }
  return count;
};
module.exports = numIslands;
