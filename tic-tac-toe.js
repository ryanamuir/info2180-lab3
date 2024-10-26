document.addEventListener("DOMContentLoaded", () => {
    // Select all div elements inside the board
    const squares = document.querySelectorAll("#board div"); // Select all squares in the game board
    const statusDiv = document.getElementById("status"); // Get the status div
    let currentPlayer = "X"; // Set initial player to "X"
    const gameState = Array(9).fill(null); // Initialize an array to track the game state

    // Winning combinations
    const winningCombinations = [
        [0, 1, 2], // Row 1
        [3, 4, 5], // Row 2
        [6, 7, 8], // Row 3
        [0, 3, 6], // Column 1
        [1, 4, 7], // Column 2
        [2, 5, 8], // Column 3
        [0, 4, 8], // Diagonal
        [2, 4, 6], // Diagonal
    ];

    // Function to check for a winner
    const checkWinner = () => {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a]; // Return "X" or "O" if there's a winner
            }
        }
        return null; // Return null if no winner
    };

    // Function to handle clicks on a square
    const handleSquareClick = (e) => {
        const index = Array.from(squares).indexOf(e.target);

        // Remove any existing class to prevent color conflicts
        e.target.classList.remove("X", "O");

        // Update game state and square content
        gameState[index] = currentPlayer;
        e.target.textContent = currentPlayer; // Display "X" or "O" in the square
        e.target.classList.add(currentPlayer); // Add class "X" or "O" for styling

        // Check for a winner
        const winner = checkWinner();
        if (winner) {
            statusDiv.textContent = `Congratulations! ${winner} is the Winner!`; // Update the status message
            statusDiv.classList.add("you-won");
            squares.forEach(square => square.removeEventListener("click", handleSquareClick)); // Disable further clicks
            return; // Exit the function
        }

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