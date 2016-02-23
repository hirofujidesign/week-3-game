var wordsArray = ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"];
var word;
var goesLeft;
var placeholder;
var input;
var wordLength;
var wordSubstring;
var currentWord;
var userGuess;
var userGuesses;
var lives;
var counter;
var space;

  function newGame()
  {

    placeholder = "";
    goesLeft = 10;
    word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    currentWord = 0;
    word = wordsArray[currentWord];
    wordLength = Word.length;
    wordSubstring = currentWord.substring;
    console.log(word);
    var myElement = document.getElementById("button").innerHTML = "Click to guess";
    var myPicElement = document.getElementById("hangimage").src = "http://fetlar.kingston.ac.uk/pp/hangman10.jpg";

    for (var count = 0; count < word.length; count++)
    {
      placeholder = placeholder + "-";
    }

    document.getElementById("placeholder").innerHTML = placeholder;
    document.getElementById("gamestatus").innerHTML = "Game running";
  }

  function guessLetter()
  {
    var correct = 0;

    var inputBox = document.getElementById("guessinput");
    input = inputBox.value;


    console.log(word);

    for (var count = 0; count < wordLength; count++)
    {
      if (input == word.substring(count, count + 1))
      {
        correct++;
        placeholder = placeholder.substring(0, count) + input + placeholder.substring(count + 1, placeholder.length + 1);
        document.getElementById("placeholder").innerHTML = placeholder;
      }
    }

    if (correct == 0)
    {
      goesLeft--;
    }
    var url = document.getElementById("hangimage").src = "http://fetlar.kingston.ac.uk/pp/hangman" + goesLeft + ".jpg";

    if (placeholder == word)
    {
      document.getElementById("hangimage").src = "http://fetlar.kingston.ac.uk/pp/hangman_win.jpg";
      alert("You guessed the word correctly. You win!");
    }

    if (goesLeft == 0)
    {
      alert("You lose");
      newGame();
    }
  }
  //guesses list
     result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

//lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

      // Animate man
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }
newGame();
document.getElementById("button").onclick = guessLetter;


    // var words = ["giraffe", "cat","eagle","pepsi","gladiator","Finding Nemo","Lakers","terminator"];
    // var word;
    // var wordHTML = "";
    // var lives = 6;
    // var livesUsed = 0;
    // var counter;
    // var space;
    // var lettersCorrect = 0;
    // var listOfLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // function SetRandomWord(){
    //   return words[Math.floor(Math.random() * words.length)];
    // }
    // function intialSetupForDisplayWord(wrd){
    //   var word = '';
    //   for (var i = 0; i < wrd.length; i++){
    //     word + word+'_';
    //   }
    //   return cword;
    // }
    // for(var i=0; i < word.length; i++){
    //     wordHTML = wordHTML + " _ ";
    // }

    // document.querySelector('#game').innerHTML = wordHTML;

    // word = SetRandomWord();
    // lettersOfWord = word.split('');
    // displayWord = initialSetupForDisplayWord(word)
    // lives = word.length + 4;

    // document.onkeyup = function(event) {
    // var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // userGuesses.push(userGuess);
    // document.querySelector('#userGuesses').innerHTML = "User Guesses: " + userGuesses.join(', ');

    // if (userGuess == lettersOfWord){
    //     wins++;
    //     document.querySelector('#wins').innerHTML = "Wins: " + wins;
    // }else{
    //     losses++;
    //     document.querySelector('#losses').innerHTML = "Lives: " - losses;
    //   }
    // }

    // comments = function(){
    //   showLives.innerHTML = "You Have " + lives + "lives";
    //   if (lives < 1) {
    //     showLives.innerHTML = "Game Over";
    //   }
    //   for (var i = 0; i < guesses.length; i++){
    //     if (counter + space === guesses.length){
    //       showLives.innerHTML = "You Win!";
    //     }
    //   }
    // }



   // Hangman
//   canvas =  function(){

//     myStickman = document.getElementById("stickman");
//     context = myStickman.getContext('2d');
//     context.beginPath();
//     context.strokeStyle = "#fff";
//     context.lineWidth = 2;
//   };
  
//     head = function(){
//       myStickman = document.getElementById("stickman");
//       context = myStickman.getContext('2d');
//       context.beginPath();
//       context.arc(60, 25, 10, 0, Math.PI*2, true);
//       context.stroke();
//     }
    
//   draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
//     context.moveTo($pathFromx, $pathFromy);
//     context.lineTo($pathTox, $pathToy);
//     context.stroke(); 
// }

//    frame1 = function() {
//      draw (0, 150, 150, 150);
//    };
   
//    frame2 = function() {
//      draw (10, 0, 10, 600);
//    };
  
//    frame3 = function() {
//      draw (0, 5, 70, 5);
//    };
  
//    frame4 = function() {
//      draw (60, 5, 60, 15);
//    };
  
//    torso = function() {
//      draw (60, 36, 60, 70);
//    };
  
//    rightArm = function() {
//      draw (60, 46, 100, 50);
//    };
  
//    leftArm = function() {
//      draw (60, 46, 20, 50);
//    };
  
//    rightLeg = function() {
//      draw (60, 70, 100, 100);
//    };
  
//    leftLeg = function() {
//      draw (60, 70, 20, 100);
//    };
  
//   drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 

    // Pseudo Code

    // var listOfAnimals = ["giraffe", "cat", "possum", "eagle"];

    // 1. we choose a word that the user has to guess from a list
    
    // var animal = listOfAnimals[Math.floor(Math.random() * listOfAnimals.length)];

    // 2. we build a view 
    //     _ _ _ _ _ _ _ 

    //     //how can we use the animal variable to build the above view

    //     var wordHTML = "";

    //     for(var i=0; i < animal.length; i++){
    //         wordHTML = wordHTML + " _ ";
    //     }

    //     document.querySelector('#game').innerHTML = wordHTML;

    // 3. we let the user guess a letter from the keyboard

    //     if the letter is in the word then 

    //     we rebuild the view

    // 4. if the user guesses all the letters then the user wins




// var playWords = ["pepsi","gladiator","Finding Nemo","Lakers","terminator",]
// var userGuess
// var userGuesses
// var lives
// var chosenWord

// var word = playWords[Math.floor(Math.random() * playWords.length)];

// var wordHTML = "";

// for(var i=0; i <playWords.length;i++){ //gives amount of underlines
//     wordHTML = (wordHTML + "_");
// }

// document.querySelector('#game').innerHTML = wordHTML; // number of games.

// document.onkeyup = function(event){// click on keyboard.
//   var userGuess - String.fromCharCode(event.keyCode)toLowerCase();

// }

// play = function(){
//   chosenWord = playWords[Math.floor(Math.random()*playwords.length)];
//   chosenWord = chosenword.replace(/\s/g,"-");
//   console.log(chosenword);
// }
// for(var i=0; i<chosenWord.length;i++){
//   wordHTML = wordHTML + "_";
// }
