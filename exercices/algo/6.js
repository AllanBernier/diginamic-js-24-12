// Créez un jeu où :
// Un mot mystère est sélectionné aléatoirement dans un tableau.
// L’utilisateur doit deviner les lettres du mot une par une.
// Affichez l’état partiel du mot (par exemple, "_ _ l _ _ _") après chaque tentative.
// Ajoutez une limite de tentatives.
const randomWords = ['python', 'javascript', 'ruby', 'java', 'typescript', 'php', 'swift', 'kotlin', 'rust', 'golang']
const prompt = require("prompt-sync")({sigint : true})
const max_attempt = 10


const getRandomWord = () => {
  const index = Math.floor( Math.random() * randomWords.length )
  return randomWords[index]
}

const getCurrentGess = (word, guessedLetters) => {
  return word
  .split('')
  .map( (lettre) => guessedLetters.includes(lettre) ? lettre : '_' )
  .join('')
}

const game = () => {
  const word = getRandomWord()
  const gessedLetters = []
  let currentGess
  let attemptNumber = 0

  while ( currentGess !== word && attemptNumber < max_attempt ) {
    const guess = prompt("Guess letter :")
    gessedLetters.push(guess)
    currentGess = getCurrentGess(word, gessedLetters)
    attemptNumber ++
    
    console.log(currentGess.split('').join(' '))
    console.log("Try number :" + attemptNumber)


  } 

  if (attemptNumber === max_attempt){
    console.log("You Lose")
  } else {
    console.log("You Win")
  }

}

game()