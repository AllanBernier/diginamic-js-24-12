// Ajoutez à la classe Robot :

// 1. Un tableau positionsNettoyees pour suivre les endroits nettoyés.
// 2. Une méthode historiqueNettoyage pour afficher toutes les positions nettoyées.
// 3. reculer() qui déplace le robot en arrière.

class Robot {
  constructor(nom) {
    this.nom = nom
    this.x = 0
    this.y = 0
    this.positionNettoyees = []
    this.historiqueDeplacement = []
  }

  seDeplacer(direction) {

    this.historiqueDeplacement.push({x : this.x, y : this.y})

    switch (direction) {
      case "haut":
        this.y++
        break;
      case "bas":
        this.y--
        break;
      case "gauche":
        this.x++
        break;
      case "droite":
        this.x--
        break;
      default:
        console.log("Mauvaise direction")
        break;
    }

  }

  nettoyer() {
    this.positionNettoyees.push({x : this.x, y : this.y})
    console.log(`Position {${this.x}, ${this.y}} netoyé`)
  }

  afficherPosition() {
    console.log(`Position : {x : ${this.x}, y : ${this.y}}`)
  }

  reinitialiserPosition() {
    this.x = 0
    this.y = 0

    console.log("Position réinitialisé")
  }

  historiqueNettoyage() {
    console.log(this.positionNettoyees)
  }

  reculer() {
    const lastPos = this.historiqueDeplacement.pop()

    if (lastPos === undefined) {
      console.log("Pas de retour arriere possible !")
      return
    }

    this.x = lastPos.x
    this.y = lastPos.y

    console.log(`Nouvelle position {x : ${this.x}, y : ${this.y}}`)
  }
}

const robot = new Robot("Tom")


robot.afficherPosition()
robot.seDeplacer("haut")
robot.seDeplacer("haut")
robot.afficherPosition()
robot.reculer()
robot.afficherPosition()

// robot.seDeplacer("haut")
// robot.nettoyer()

// robot.seDeplacer("haut")
// robot.nettoyer()

// robot.seDeplacer("gauche")
// robot.nettoyer()

// robot.seDeplacer("gauche")
// robot.seDeplacer("gauche")

// robot.seDeplacer("gauche")

// robot.reculer()
// robot.seDeplacer("gauche")


// robot.afficherPosition()

// robot.historiqueNettoyage()


// console.log(robot.historiqueDeplacement)