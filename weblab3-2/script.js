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
gameName.innerHTML = '<h1>Үг Таах Тоглоом</h1>';

const playButton = document.createElement('button');
playButton.innerHTML = "Эхлэх";

startDiv.appendChild(gameName);
startDiv.appendChild(playButton);
/////////////////////////////////////////////////////////////////////
const returnButton = document.createElement('button');
returnButton.innerHTML = 'Буцах';

const healthBar = document.createElement('div');
healthBar.id = 'healthBar';

const timerBar = document.createElement('div');
timerBar.id = 'timerBar';
timerBar.innerHTML = 0;

const wordToGuess = document.createElement('div');
wordToGuess.id = 'wordToGuess';

gameDiv.appendChild(returnButton);
gameDiv.appendChild(timerBar);
gameDiv.appendChild(healthBar);
gameDiv.appendChild(wordToGuess);
////////////////////////////////////////////////////////////////
const resultBox = document.createElement('div');
resultBox.id = 'resultBox';

const returnButton2 = document.createElement('button');
returnButton2.innerHTML = "Return";

overDiv.appendChild(resultBox);
overDiv.appendChild(returnButton2);

returnButton.addEventListener('click', () => {
    startDiv.style.display = 'flex';
    gameDiv.style.display = 'none';
    clearInterval(myInterval);
});

returnButton2.addEventListener('click', () => {
    startDiv.style.display = 'flex';
    overDiv.style.display = 'none';
    clearInterval(myInterval);
});

var words = ['mouse', 'cow', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'sheep', 'monkey', 'dog', 'pig'];

let currentWord = '';
let healthPoints = 5;
for (let i = 0; i < 5; i++) {
    const heart = document.createElement("img");
    heart.src = "full.png";
    healthBar.appendChild(heart);
}
hearts = document.querySelectorAll("img");
let isThereWord = false;
let randWord;
let numberOfGuessedLetters = 0;
let numberOfGuessedWords = 0;
let guessedWords = [];
let s = 0;
let d = 0;
let m = 0;
let healthPointDeducted = false;
var myInterval;

playButton.addEventListener('click', () => {
    startDiv.style.display = 'none';
    gameDiv.style.display = 'flex';
    d = 0;
    s = 0;
    m = 0;
    numberOfGuessedWords = 0;
    healthPoints = 5;
    guessedWords = [];
    healthBar.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement("img");
        heart.src = "full.png";
        healthBar.appendChild(heart);
    }
    hearts = document.querySelectorAll("img");
    isThereWord = false;
    myInterval = setInterval(play, 100);
});

function generateRandomNumberArray(n, m) {
    if (n > m) {
        return [];
    }

    var arr = [];
    while (arr.length < n) {
        var number = Math.floor(Math.random() * m);

        if (!arr.includes(number)) {
            arr.push(number);
        }
    }

    return arr;
}

function play() {
        d += 100;
        if (d === 1000) {
            d = 0;
            s++;
        }
        if (s === 60) {
            s = 0;
            m++
        }
        timerBar.innerHTML = m + 'm ' + s + 's ' + d/100;
        if (!isThereWord || randWord.length === numberOfGuessedLetters) {

            randWord = words[Math.floor(Math.random() * words.length)];
            wordToGuess.innerHTML = "";
            numberOfGuessedLetters = 0;
            for (let i = 0; i < randWord.length; i++) {
                const inputBox = document.createElement("input");
                inputBox.maxLength = 1;
                wordToGuess.appendChild(inputBox);
            }
            isThereWord = true;

            let array = generateRandomNumberArray(Math.floor(randWord.length / 2), randWord.length);
            const inputs = document.querySelectorAll("input");
            for (let i = 0; i < array.length; i++) {
                inputs[array[i]].value = randWord[array[i]];
                inputs[array[i]].readOnly = true;
                inputs[array[i]].style.backgroundColor = "green";
                inputs[array[i]].style.color = "white";
                numberOfGuessedLetters++;
            }
        } 
        if (isThereWord) {
            const inputs = document.querySelectorAll("input");
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].value === randWord[i] && inputs[i].style.backgroundColor != "green") {
                    inputs[i].readOnly = true;
                    inputs[i].style.backgroundColor = "green";
                    inputs[i].style.color = 'white'; 
                    numberOfGuessedLetters++;
                } 
                if (inputs[i].value != "" && inputs[i].value != randWord[i] && !healthPointDeducted) {

                    if (!healthPointDeducted) {
                        hearts[healthPoints - 1].src = 'empty.png';
                        healthPoints--;
                        healthPointDeducted = true;
                    }
                    inputs[i].style.backgroundColor = 'red';
                    inputs[i].blur();
                    const myTimeout = setTimeout(() => {
                        inputs[i].style.backgroundColor = '';
                        inputs[i].value = '';
                        inputs[i].focus();
                        healthPointDeducted = false;
                    }, 1000);
                }
            }
        }
        if (randWord.length === numberOfGuessedLetters) {
            numberOfGuessedWords++;
            guessedWords.push(randWord);
            isThereWord = false;
        }
        if (healthPoints === 0) {
            overDiv.style.display = "flex";
            gameDiv.style.display = "none";

            resultBox.innerHTML = "<h1>Game over!</h1><br>You have guessed these " + numberOfGuessedWords + " words correctly:<br>" + guessedWords + "<br>in " + m + " minutes " + s + " seconds.<br><br>";
            clearInterval(myInterval);
        }
}
