// Créez un jeu où :
// Le programme génère un nombre aléatoire entre 1 et 100.
// L’utilisateur a 5 essais pour deviner le nombre.
// Après chaque tentative, le programme indique si le nombre à deviner est plus grand ou plus petit.
// Si l’utilisateur devine correctement ou utilise tous ses essais, le jeu se termine.
const prompt = require("prompt-sync")({sigint : true})

const number = Math.round( Math.random() * 99 + 1 )
let guess = parseInt(prompt("Nombre 1 :"))

if (number === guess) {
  console.log("You win !")
} else {
  if (guess < number) {
    console.log("Too little")
  } else {
    console.log("Too big")
  }
  guess = parseInt(prompt("Nombre 2 :"))
}

if (number === guess) {
  console.log("You win !")
} else {
  if (guess < number) {
    console.log("Too little")
  } else {
    console.log("Too big")
  }
  guess =  parseInt(prompt("Nombre 3 :"))
}

if (number === guess) {
  console.log("You win !")
} else {
  if (guess < number) {
    console.log("Too little")
  } else {
    console.log("Too big")
  }
  guess =  parseInt(prompt("Nombre 4 :"))
}

if (number === guess) {
  console.log("You win !")
} else {
  if (guess < number) {
    console.log("Too little")
  } else {
    console.log("Too big")
  }
  guess =  parseInt(prompt("Nombre 5 :"))
}

if (number === guess) {
  console.log("You win !")
} else {
  console.log("You lose")
}
