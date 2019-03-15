var theAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var soFar = [];
var compChoice; //declared only


compChoice = theAlphabet[Math.floor(Math.random() * theAlphabet.length)];
console.log("The computer has chosen the letter: " + compChoice);

document.onkeyup = function (event) {

	var userGuesses = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuesses);

	if (event.keyCode >= 65 && event.keyCode <= 90) {
		soFar.push(userGuesses);
		document.getElementById("soFar").innerHTML = soFar.join(", ");
	}

	if (event.keyCode >= 65 && event.keyCode <= 90) {

		if (userGuesses == compChoice) {
			wins++;
			guessesLeft--;
			soFar = [];
			guessesLeft = 10;
			document.getElementById("soFar").innerHTML = soFar.join(", ");
			document.getElementById("wins").innerHTML = wins;
			document.getElementById("guessesLeft").innerHTML = guessesLeft;
			document.getElementById("guessesLeft").innerHTML = guessesLeft;

			alert("Oh my Gawddddd! You ARE a psychic! How did you figure out that I was thinking of the letter '" + userGuesses + "' ?!");
			alert("But, do you think you can do it again?");

			compChoice = theAlphabet[Math.floor(Math.random() * theAlphabet.length)];
			console.log("The computer has chosen the letter: " + compChoice);

		} else {
			losses++;
			guessesLeft--;
			document.getElementById("losses").innerHTML = losses;
			document.getElementById("guessesLeft").innerHTML = guessesLeft;
		}
	} else {
		alert("Please select a letter from the English Alphabet. You know, from a to z, understood?");
	}

	if (guessesLeft == 0) {
		guessesLeft = 10;
		soFar = [];
		document.getElementById("guessesLeft").innerHTML = guessesLeft;
		document.getElementById("soFar").innerHTML = soFar.join(", ");
		alert("GAME OVER")
		alert("That sucks! Looks like you ran out of guesses, huh? Do you want to try again, even though you are bad at this?")

		compChoice = theAlphabet[Math.floor(Math.random() * theAlphabet.length)];
		console.log("The computer has chosen the following letter: " + compChoice);
	}
}