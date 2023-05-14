// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Get the guess input and guess button elements
const guessInput = document.getElementById('guess');
const guessButton = document.getElementById('guessButton');

// Get the result paragraph and remaining guesses span elements
const resultParagraph = document.getElementById('result');
const remainingGuessesSpan = document.getElementById('remaining-guesses');

// Get the restart button element
const restartButton = document.getElementById('restart');

// Set the initial number of guesses to 10
let remainingGuesses = 10;

// Disable the guess button if the guess input is empty
guessInput.addEventListener('input', () => {
	guessButton.disabled = guessInput.value === '';
});

// Handle a guess
guessButton.addEventListener('click', () => {
	// Get the user's guess
	const guess = parseInt(guessInput.value);

	// Check if the guess is valid
	if (isNaN(guess) || guess < 1 || guess > 100) {
		resultParagraph.textContent = 'Please enter a valid number between 1 and 100.';
	} else {
		// Decrement the remaining guesses and update the remaining guesses display
		remainingGuesses--;
		remainingGuessesSpan.textContent = remainingGuesses;

		// Check if the guess is correct
		if (guess === randomNumber) {
			resultParagraph.textContent = `Congratulations! You guessed the number ${randomNumber} in ${10 - remainingGuesses} guesses.`;
			disableInputAndButton();
			showRestartButton();
		} else if (remainingGuesses === 0) {
			resultParagraph.textContent = `Sorry, you ran out of guesses. The number was ${randomNumber}.`;
			disableInputAndButton();
			showRestartButton();
		} else {
			// Give the user a hint and clear the guess input
			resultParagraph.textContent = guess < randomNumber ? 'Too low. Guess again.' : 'Too high. Guess again.';
			guessInput.value = '';
		}
	}
});

// Handle a restart
restartButton.addEventListener('click', () => {
	// Generate a new random number and reset the remaining guesses
	randomNumber = Math.floor(Math.random() * 100) + 1;
	remainingGuesses = 10;

	// Update the display and enable the guess input and button
	resultParagraph.textContent = 'Guess a number between 1 and 100. You have 10 guesses.';
	remainingGuessesSpan.textContent = remainingGuesses;
	guessInput.value = '';
	guessButton.disabled = true;
	guessInput.disabled = false;
	guessButton.style.opacity = 1;

	// Hide the restart button
	restartButton.style.display = 'none';
});

// Function to disable the guess input and button
function disableInputAndButton() {
	guessInput.disabled = true;
	guessButton.style.opacity = 0.5;
}

// Function to show the restart button
function showRestartButton() {
	restartButton.style.display = 'block';
}
