const arabicAlphabet = ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "هـ", "و", "ي"];
let missingLetters = [];
let emptyBoxes = [];
const puzzleContainer = document.getElementById('puzzle');
const newGameBtn = document.getElementById('newGameBtn');
const showAnswersBtn = document.getElementById('showAnswersBtn');

// Function to shuffle and create the puzzle
function shufflePuzzle() {
    puzzleContainer.innerHTML = '';
    const shuffled = [...arabicAlphabet].sort(() => Math.random() - 0.5);
    missingLetters = [];
    emptyBoxes = [];

    // Populate the grid with letters, leaving the last two corners empty
    for (let i = 0; i < shuffled.length; i++) {
        const letterBox = document.createElement('div');
        
        // Leave the last two boxes in the grid empty for missing letters
        if (i === shuffled.length - 1 || i === shuffled.length - 2) {
            missingLetters.push(shuffled[i]);
            letterBox.innerHTML = '';
            emptyBoxes.push(letterBox);
        } else {
            letterBox.innerHTML = shuffled[i];
        }

        puzzleContainer.appendChild(letterBox);
    }
}

// Show the missing letters in the empty boxes
showAnswersBtn.addEventListener('click', () => {
    emptyBoxes.forEach((box, index) => {
        box.innerHTML = missingLetters[index];
    });
});

// Create a new game
newGameBtn.addEventListener('click', () => {
    shufflePuzzle();
});

// Initialize the game
shufflePuzzle();

// Create a new game
newGameBtn.addEventListener('click', () => {
    shufflePuzzle();
});

// Leaderboard points system
const increasePoints = (leader) => {
    const score = document.getElementById(`${leader}Score`);
    score.textContent = parseInt(score.textContent) + 1;
};

const decreasePoints = (leader) => {
    const score = document.getElementById(`${leader}Score`);
    score.textContent = parseInt(score.textContent) - 1;
};

// Add donor to the list
addDonorBtn.addEventListener('click', () => {
    const donorName = document.getElementById('donorName').value;
    if (donorName.trim() !== '') {
        const donorDiv = document.createElement('div');
        donorDiv.textContent = donorName;
        donorsList.appendChild(donorDiv);
        document.getElementById('donorName').value = ''; // Clear the input
    }
});

// Initialize the game
shufflePuzzle();
