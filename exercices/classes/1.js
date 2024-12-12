// Créez une classe Robot avec les fonctionnalités suivantes :
// Propriétés : Nom, position initiale (0, 0).
// Méthodes :
// seDeplacer(direction) : Change la position (haut, bas, gauche, droite).
// nettoyer() : Affiche un message indiquant que la position actuelle est propre.
// afficherPosition() : Affiche la position actuelle du robot.
// reinitialiserPosition() : Réinitialise la position du robot à (0, 0).


class Robot {

  constructor(nom) {
    this.nom = nom
    this.x = 0
    this.y = 0
  }

  seDeplacer(direction) {

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
}


const robot = new Robot("Tom")


robot.seDeplacer("haut")
robot.nettoyer()

robot.seDeplacer("haut")
robot.nettoyer()

robot.seDeplacer("gauche")
robot.nettoyer()

robot.afficherPosition()







