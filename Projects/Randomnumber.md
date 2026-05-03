let randomnumber = parseInt(Math.random()\*10+1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector("#guessField");
const guessslot = document.querySelector(".guesses");
const remaining = document.querySelector('.lastResult');
const lowerhi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p")

let prevGuess =[];
let NumGuess =1;

let playGame =true;

if(playGame){
submit.addEventListener('click',function(e){
e.preventDefault();
const guess = parseInt(userInput.value);
console.log(guess);
validateGuess(guess);

})
}

function validateGuess(guess){
if(isNaN(guess)){
alert("Please enter a valid Number ")
}else if( guess < 1 ){
alert("Please enter a valid Number ")
}else if(guess>100){
alert("Please enter a valid Number ")
}else{
prevGuess.push(guess)
if(NumGuess === 11){
displayMessage(`Game Over, Rnadom number was${randomnumber}`)
endGame()

    }else{
      displayGuess(guess)
      checkGuess(guess)
    }

}
}

function checkGuess(guess){
if(guess === randomnumber){
displayMessage("you gusssed it right")
}else if (guess < randomnumber){
displayMessage("number is to low")
}else if (guess >randomnumber){
displayMessage("number is too high")
}
}

function displayGuess(guess){
userInput.value = ""
guessslot.innerHTMl += `${guess}`
NumGuess++;
remaining.innerHTML =`${11-NumGuess}`
}

function displayMessage(message){
lowerhi.innerHTML=`<h2>${message}</h2>`;
}

function newGames(){
userInput.value = ''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML = `<h2 id  = "newGame"> Start the Game </h2>`;
startOver.appendChild(p)
playGame=false
newGame();
}

function endGame(){
const newGameButton =document.querySelector('#newGame')
newGameButton.addEventListener('click', function(e){
randomnumber = parseInt(Math.random()\*100+1)
prevGuess = []
NumGuess = 1
guessslot.innerHtml=''
remaining.innerHTMl = `${11 -NumGuess}`;
userInput.removeAttribute('disabled')
startOver.removeChild(p)

playGame =true

})
}

# html of code

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../styles.css">
</head>
<body style="background-color:#212121; color:#fff;">
  <nav>
    <a href="/" aria-current="page">Home</a>
    <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
      >Youtube channel</a
    >
  </nav>
    
    <div id="wrapper">
      <h1>Number guessing game</h1>
    <p>Try and guess a random number between 1 and 100.</p>
    <p>You have 10 attempts to guess the right number.</p>
    </br>
        <form class="form">
            <label2 for="guessField" id="guess">Guess a number</label>
            <input type="text" id="guessField" class="guessField">
            <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
        </form>

        <div class="resultParas">
            <p >Previous Guesses: <span class="guesses"></span></p>
            <p >Guesses Remaining: <span class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
        </div>
    </div>
    <script src="chaiaurcode.js"></script>

</body>
</html>

# css

html {
font-family: sans-serif;
}

body {
width: 300px;
max-width: 750px;
min-width: 480px;
margin: 0 auto;
background-color: #212121;
}

.lastResult {
color: white;
padding: 7px;
}

.guesses {
color: white;
padding: 7px;
}

button {
background-color: #141414;
color: #fff;
width: 250px;
height: 50px;
border-radius: 25px;
font-size: 30px;
border-style: none;
margin-top: 30px;
/_ margin-left: 50px; _/
}

#subt {
background-color: #161616;
color: #ffffff;
width: 200px;
height: 50px;
border-radius: 10px;
font-size: 20px;
border-style: none;
margin-top: 50px;
/_ margin-left: 75px; _/
}

#guessField {
color: #000;
width: 250px;
height: 50px;
font-size: 30px;
border-style: none;
margin-top: 25px;

/_ margin-left: 50px; _/
border: 5px solid #6c6d6d;
text-align: center;
}

#guess {
font-size: 55px;
/_ margin-left: 90px; _/
margin-top: 120px;
color: #fff;
}

.guesses {
background-color: #7a7a7a;
}

#wrapper {
box-sizing: border-box;
text-align: center;
width: 450px;
height: 550px;
background-color: #474747;
color: #fff;
font-size: 25px;
}

h1 {
background-color: #161616;

color: #fff;
text-align: center;
}

p {
font-size: 16px;
text-align: center;
}
