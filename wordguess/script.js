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


playButton.addEventListener('click', () => {
    startDiv.style.display = 'none';
    gameDiv.style.display = 'flex';
    showWordToGuess();
});

returnButton.addEventListener('click', () => {
    startDiv.style.display = 'flex';
    gameDiv.style.display = 'none';
});

var words = ['нэг',
             'хоёр', 
             'гурав', 
            'дөрөв'];

function showWordToGuess() {
    var randWord = words[Math.floor(Math.random() * words.length)];
    wordToGuess.innerHTML = randWord;

    for (var i = 0; i < randWord.length; i++) {
        const input = document.createElement('input');
        input.id = i;
        input.maxLength = 1;
        wordToGuess.appendChild(input);
        input.addEventListener('input', () => {
            if (randWord[input.id] === input.value) {
                console.log('right letter');
                input.readOnly = 'true';
                input.style.backgroundColor = 'green';
            } else {
                input.style.backgroundColor = 'red';
                input.blur();

                const myTimeout = setTimeout(() => {
                    input.style.backgroundColor = '';
                    input.focus();
                    input.value = '';
                }, 1000);
            }
        });
    }


}

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