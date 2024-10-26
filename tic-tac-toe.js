document.addEventListener("DOMContentLoaded", () => {
    // Select all div elements inside the board
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X"; // Set initial player to "X"
    const gameState = Array(9).fill(null); // Initialize an array to track the game state

    // Function to handle clicks on a square
    const handleSquareClick = (e) => {
        const index = Array.from(squares).indexOf(e.target);

        // Remove any existing class to prevent color conflicts
        e.target.classList.remove("X", "O");

        // Update game state and square content
        gameState[index] = currentPlayer;
        e.target.textContent = currentPlayer; // Display "X" or "O" in the square
        e.target.classList.add(currentPlayer); // Add class "X" or "O" for styling

        // Alternate between "X" and "O" for the next turn
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    };
    
    // Add the "square" class to each div in the game board
    squares.forEach(square => {
        square.classList.add("square");
        square.addEventListener("click", handleSquareClick);

        // Mouseover and mouseout event listeners using your compact style
        square.addEventListener('mouseover', function(e) {
            e.target.classList.add('hover'); // Add hover class
        });

        square.addEventListener('mouseout', function(e) {
            e.target.classList.remove('hover'); // Remove hover class
        });
    });
});