const container = document.querySelector(".container");
let size = 16;

// function gridSize() {
//   return (size = prompt("Please enter size of grid"));
// }

for (let i = 0; i < size * size; i++) {
  
    let grid = document.createElement("div");
    grid.className = "grid";

    container.appendChild(grid);

    let grids = document.querySelectorAll(".grid");
    
    grids.forEach((grid) => {
      grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "black";
      });
    });
  
}
