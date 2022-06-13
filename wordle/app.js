var ATTEMPTS = 6;
var LENGTH = 5;

var gameover= false;//save this


var currentGuess = "";
var correctWord;//save this

var guesslist = [];//save this

var allowed = [];
var answers = [];

function loadState(){
    correctWord = JSON.parse(localStorage.getItem("correctWord"));
    gameOver = JSON.parse(localStorage.getItem("gameOver"));
    guesslist = JSON.parse(localStorage.getItem("guesslist"));
    
    if(!guesslist){
        guesslist = [];
    }
    if(!gameOver){
        gameOver = false;
    }
}

function resetGame(){
    correctWord = "";
    currentGuess = "";
    guesslist=[];
    gameOver = false;
}

function getWordofTheMinute(){
    var dateString = moment().format('YYYYMMDDHHmm');
    var dateNumber = parseInt(dateString, 10);
    var word = answers[dateNumber % answers.length];
    console.log(dateString , dateNumber, word);
    return word;
}

function saveState(){
    localStorage.setItem("correctWord", JSON.stringify(correctWord));
    localStorage.setItem("gameOver", JSON.stringify(gameover));
    localStorage.setItem("guesslist", JSON.stringify(guesslist));
}

function fetchWordList(){
    fetch("https://api.jsonbin.io/b/629f9937402a5b38021f6b38").then(function(response){
        response.json().then(function(data){
            allowed = data.allowed.concat(data.answers);
            answers = data.answers;
            console.log("the data has arrived: ", data);
            loadState();
            getWord();
            updateGuesses();
            setupInputs();
        });
    });
}

//function wordleTimer(){
//    var sec = 60;
//    function updateSec(){
//        sec--;
//        document.querySelector("#timer").innerHtml = sec;
//        if ( sec === 0){
//            document.querySelctor("#timer").innerHtml = "";
//        }
//    }
//    updateSec();
//}

function getWord(){
    var NewWord = getWordofTheMinute();
    //wordleTimer();
    if (correctWord != NewWord){
        resetGame();
        correctWord = NewWord;
        saveState();
    }
    //var index = Math.floor(Math.random() * answers.length);
    //correctWord = answers[index];
    console.log("The Word of the day is: ",correctWord)
    //return correctWord;
}

function checkWord(correct, guess){
    var result = [0,0,0,0,0];
    var letters = correct.split("");

    //mark 1 for green letters
    for(var i=0; i< LENGTH; i++){
        if(guess[i] == letters[i]){
            letters[i] = null;
            result[i] = 1;
        }
    }
    
    //mark 2 for yellow letters
    for (var i=0; i<LENGTH; i++){
        var index = letters.indexOf(guess[i]);
        if (index>=0 && result[i] == 0){
            letters[index] = null;
            result[i] = 2;
        }
    }
    return result;
}

function updateGuesses(){
    var guesses = document.querySelector("#guesses");
    guesses.innerHTML = "";
    for(var i=0; i< ATTEMPTS; i++){
        var guessrow = document.createElement("div");
        guessrow.classList.add("guess");
        guesses.appendChild(guessrow);

        var result;
        if (i < guesslist.length){
            guessrow.classList.add("grey");
            result = checkWord(correctWord, guesslist[i]);
        };
    
        for(var j=0; j< LENGTH; j++){
            var guessbox = document.createElement("div");
            guessbox.classList.add("letter");
            if (i == guesslist.length && j < currentGuess.length){
                guessbox.innerHTML = currentGuess[j];
            }
            if (i < guesslist.length){
                guessbox.innerHTML = guesslist[i][j];
                if (result[j] == 1){
                guessbox.classList.add("green");
                } else if(result[j] == 2){
                    guessbox.classList.add("yellow");
            }
        };
            guessrow.appendChild(guessbox);
        }
    }
}

function submitGuess(){
    var message = document.querySelector("#message");
    message.innerHTML = "";
    if (currentGuess.length ==5 && allowed.includes(currentGuess)){
        guesslist.push(currentGuess);
        console.log("guesses:",guesslist);
        guesses.innerHTML = "";
        updateGuesses();
        saveState();
        if (currentGuess == correctWord){
            message.innerHTML = "Good Job that is the correct Word!";
            gameover = true;
        }else if(guesslist.length == 6){
            message.innerHTML = "Nice try, but you lost. The word was: "+correctWord;
            gameover = true;
        }    
    }else{
        message.innerHTML = "That is not a valid word.";
    }
        
   // };

}

function setupInputs(){
    document.onkeydown = function(event) {
        if(!gameover && !event.altKey && !event.ctrl && !event.metaKey){
            if (event.keyCode >= 65 && event.keyCode <=90){
                if (currentGuess.length < 5){
                    console.log("key: ", event.key.toLowerCase());
                    currentGuess += event.key.toLowerCase();
                    console.log("guess: ",currentGuess);
                }
            }else if(event.keyCode == 8){ //backspace
                currentGuess = currentGuess.slice(0,-1);
            }else if(event.keyCode == 13) { //enter
                submitGuess();
                currentGuess = "";
            }
        }
        updateGuesses();
    };
     
}
fetchWordList();
