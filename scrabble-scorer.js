// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
let userWord="";
let vowelArr= ['a','e','i','o','u'];

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


function initialPrompt() {
   // original code - console.log("Let's play some scrabble! Enter a word:");
  console.log("Let's play some Scrabble!");
  userWord = input.question("Enter a word to score: ");
  //console.log(oldScrabbleScorer(userWord));
}; 

function simpleScore(word) {
 let simpleScore = 0;
   for (let i = 0; i < word.length; i++) {
    simpleScore++;
   }
  return simpleScore; 
} 

function vowelBonusScore(word) {
 let vowelBonusScore = 0;
   for (let i = 0; i < word.length; i++) {
    if (vowelArr.includes(word[i])) {
     vowelBonusScore = vowelBonusScore + 3;
    } else {
    vowelBonusScore++;
    }
   }
  return vowelBonusScore; 
} 

function scrabbleScore(word) {
  // word = word.toUpperCase
}

let simpleScoreOpt = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoringFunction: simpleScore
};

let vowelBonusScoreOpt = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction: vowelBonusScore
};

let scrabbleOpt = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoringFunction: scrabbleScore
};

const scoringAlgorithms = [simpleScoreOpt, vowelBonusScoreOpt, scrabbleOpt];


function scorerPrompt() {
    let scorerPrompt = input.question("Which scoring algorithm would you like to use? \n\n0 - Simple: One point per character \n1 - Vowel Bonus: Vowels are worth 3 points \n2 - Scrabble: Uses scrabble point system \nEnter 0, 1, or 2: ")
      
    return scoringAlgorithms[scorerPrompt].scoringFunction(userWord);
}

function transform(oldPointStructure) {
  for (const key in oldPointStructure) {
   for (let i = 0; i < oldPointStructure[key].length; i++) {

    }
  } return transform;
}; console.log(oldPointStructure[key][i]));


let newPointStructure;

function runProgram() {
   initialPrompt();
  //  console.log(vowelBonusScore(userWord));
  console.log(`Score for '${userWord}': ${scorerPrompt(scoringAlgorithms)}`);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

