// Créez une fonction startTimer qui affiche un chronomètre (en secondes) 
// dans la console toutes les secondes. La fonction doit :
// S’arrêter automatiquement après 10 secondes.
// Afficher "Temps écoulé !" à la fin.

const startTimer = (timeout) => {
  let seconds = 0
  const timer = setInterval( () => {
    console.log("Chronomètre :" + seconds )
    seconds = seconds + 1

    if (seconds > timeout) {
      console.log("Temps écoulé !")
      clearInterval(timer)
    }
  }, 1000)
}


startTimer(10)