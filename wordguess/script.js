const container = document.getElementById('container');
/////////////////////////////////////////////////////////////////////
const startDiv = document.createElement('div');
startDiv.id = 'startDiv';

const gameDiv = document.createElement('div');
gameDiv.id = 'gameDiv';
gameDiv.style.display = 'none';

const overDiv = document.createElement('div');
overDiv.id = 'overDiv';
overDiv.style.display = 'none';

container.appendChild(startDiv);
container.appendChild(gameDiv);
container.appendChild(overDiv);
/////////////////////////////////////////////////////////////////////
const gameName = document.createElement('h1');
gameName.innerHTML = 'Үг Таах Тоглоом';

const playButton = document.createElement('button');
playButton.innerHTML = "Эхлэх";

startDiv.appendChild(gameName);
startDiv.appendChild(playButton);
/////////////////////////////////////////////////////////////////////
const returnButton = document.createElement('button');
returnButton.innerHTML = 'Буцах';

const healthBar = document.createElement('div');
healthBar.id = 'healthBar';

const guessedWordBar = document.createElement('div');
guessedWordBar.id = 'guessedWordBar';

const timerBar = document.createElement('div');
timerBar.id = 'timerBar';
timerBar.innerHTML = 0;

const wordToGuess = document.createElement('div');
wordToGuess.id = 'wordToGuess';

gameDiv.appendChild(returnButton);
gameDiv.appendChild(timerBar);
gameDiv.appendChild(guessedWordBar);
gameDiv.appendChild(healthBar);
gameDiv.appendChild(wordToGuess);
////////////////////////////////////////////////////////////////
const resultBox = document.createElement('div');
resultBox.id = 'resultBox';

const returnButton2 = document.createElement('button');

const playAgainButton = document.createElement('button');

overDiv.appendChild(resultBox);
overDiv.appendChild(returnButton2);
overDiv.appendChild(playAgainButton);


var numberOfLetters;
var numberOfGuessedLetters = 0;
var numberOfGuessedWords = 0;

playButton.addEventListener('click', () => {
    startDiv.style.display = 'none';
    gameDiv.style.display = 'flex';
    setInterval(() => {
        timerBar.innerHTML = parseInt(timerBar.innerHTML) + 1;
    }, 1000);
});

returnButton.addEventListener('click', () => {
    startDiv.style.display = 'flex';
    gameDiv.style.display = 'none';
});

var words = ['mouse', 'cow', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'sheep', 'monkey', 'dog', 'pig'];

let currentWord = '';
let healthPoints = 5;

function chooseRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function startNewRound() {
    currentWord = chooseRandomWord();
    healthPoints = 5;
    
    displayMysteryWord();
    updateHealthDisplay();
}

// Function to display the mystery word as input fields
function displayMysteryWord() {
    wordToGuess.innerHTML = '';
    
    for (var i = 0; i < currentWord.length; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.id = i;
        input.addEventListener('input', handleInput);
        wordToGuess.appendChild(input);
    }
    var arr = generateRandonNumberArray((currentWord.length - 1) / 2, currentWord.length);
    for (var i = 0; i < arr.length; i++) {
        var inputField = document.getElementById(arr[i]);
        inputField.value = currentWord[arr[i]];
        inputField.readOnly = 'true';
        inputField.style.backgroundColor = 'green';
        numberOfGuessedLetters++;
    }
}

// Function to handle user input in input fields
function handleInput(event) {
    const input = event.target;
    const index = Array.from(input.parentNode.children).indexOf(input);
    const letter = currentWord[index];
    
    if (input.value === letter) {
        // Correct guess
        input.style.backgroundColor = 'green';
        input.readOnly = true;
        numberOfGuessedLetters++;

        // Check if the entire word is guessed
        if (numberOfGuessedLetters === currentWord.length) {
            numberOfGuessedLetters = 0;
            numberOfGuessedWords++;
            console.log(numberOfGuessedWords);
            startNewRound();
        }
    } else {
        // Incorrect guess
        input.style.backgroundColor = 'red';
        input.value = '';
        healthPoints--;
        const myTimeout = setTimeout(() => {
            input.style.backgroundColor = '';
            input.focus();
            input.value = '';
        }, 1000);



        updateHealthDisplay();

        if (healthPoints === 0) {
            // Player loses the round
            // Display a lose message or end the game
            // You can implement this part
        }
    }
}

// Function to update and display health points
function updateHealthDisplay() {
    healthBar.innerHTML = healthPoints;
}

// Start the game
startNewRound();

function generateRandonNumberArray(n, m) {
    if (n > m) {
        return;
    }
    var arr = [];
    while (arr.length != n) {
        var number = Math.floor(Math.random() * m);
        var isItThere = false;

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === number) {
                isItThere = true;
                break;
            }
        }
        if (isItThere === false) {
            arr.push(number);
        }
    }
    return arr;
}
