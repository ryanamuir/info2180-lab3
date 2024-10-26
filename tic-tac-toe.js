document.addEventListener("DOMContentLoaded", () => {
    // Select all div elements inside the board
    const squares = document.querySelectorAll("#board div");

    // Add the "square" class to each div in the game board
    squares.forEach(square => {
        square.classList.add("square");
    });
});